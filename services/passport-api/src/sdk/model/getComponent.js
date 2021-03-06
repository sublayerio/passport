const getResource = require("./getResource");
const template = require("lodash/template");

const scalarTypes = {
  json: {
    serialize: value => {
      try {
        return value ? JSON.parse(value) : null;
      } catch {
        return null;
      }
    },
    parseValue: value => {
      try {
        return value ? JSON.stringify(value) : null;
      } catch {
        return null;
      }
    }
  }
};

const serializeData = (data, { model }) => {
  const fields = model.fields

  let record = {};

  fields.forEach(field => {
    const { type } = field;
    const scalarType = scalarTypes[type];

    let value = data[field.id];

    if (!scalarType) {
      record[field.id] = value;
      return;
    }

    value = scalarType.serialize(value);

    record[field.id] = value;
  });

  return record;
};

const getRelationshipFields = model =>
  model.fields.filter(field => field.type === "relationship");

const transform = (model, row) => serializeData(row, { model });

const transformMany = (model, rows) => rows.map(row => transform(model, row));

const addRecords = (state, { modelId, records }) => {
  const key = modelId;
  state[key + "Datas"] = state[key + "Datas"] || {};
  state[key] = state[key] || [];

  records.forEach(record => {
    state[key + "Datas"][record.id] = record;
    state[key].push(record.id);
  });
  return state;
};

const getRecordsForRelationship = ctx => async ({ modelId, whereIn }) => {
  if (!whereIn.length) {
    return []
  }
  const model = getResource(ctx)("Model", modelId);
  const rows = await ctx.db.query(
    `SELECT * FROM \`${model.tableName}\` WHERE id IN (?)`,
    [whereIn]
  );
  const records = transformMany(model, rows);
  return records;
};
module.exports = ctx => async ({ componentId, recordId }) => {

  const component = getResource(ctx)("Component", componentId);

  const { modelId, foreignModel: foreignModelId } = component;
  const model = getResource(ctx)("Model", modelId);
  const foreignModel = getResource(ctx)("Model", foreignModelId);

  const [row] = await ctx.db.query(
    `SELECT * FROM \`${model.tableName}\` WHERE id = ? LIMIT 1`,
    [recordId]
  );

  const source = transform(model, row);

  let state = {};

  let query = `SELECT \`${foreignModel.tableName}\`.* FROM ${
    foreignModel.tableName
    } ${component.query} LIMIT 1000`;
  let bindings = component.bindings || [];

  bindings = bindings.map(binding => template(binding)({ source, model }));

  const rows = await ctx.db.query(query, bindings);

  const records = transformMany(foreignModel, rows);

  state = addRecords(state, {
    modelId: foreignModelId,
    records
  });

  const relationshipFields = getRelationshipFields(foreignModel);

  await Promise.all(
    relationshipFields.map(async field => {
      const relationshipRecords = await getRecordsForRelationship(ctx)({
        modelId: field.settings.foreignModel,
        whereIn: records.map(record => record[field.id])
      });

      state = addRecords(state, {
        modelId: field.settings.foreignModel,
        records: relationshipRecords
      });
    })
  );

  return state;
};
