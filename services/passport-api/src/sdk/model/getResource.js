const camelCase = require("camelcase");

module.exports = ctx => (type, id) => {
  return ctx.schema[type + "Datas"][id];
};
