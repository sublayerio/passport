import React from "react";
import { css } from "emotion";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import api from "../services/api";
import ModelDetailPage from "@sublayer/ui/lib/model-detail-page";
import Loader from "@sublayer/ui/lib/loader";
import Content from "../Content";
import icons from '../icons2'

const arrowAltCircleRight = props => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm134.48 256.52L276.32 380.41c-7.49 7.67-20.48 2.22-20.48-8.57v-71.51H140a12.08 12.08 0 0 1-12-12.1v-64.56a12.08 12.08 0 0 1 12-12.1h115.84v-71.41c0-10.79 12.89-16.24 20.48-8.57l114.16 115.89a12.08 12.08 0 0 1 0 17.04z" fillOpacity="0.6"></path>
            <path fill="currentColor" d="M128 288.23v-64.56a12.08 12.08 0 0 1 12-12.1h115.84v-71.41c0-10.79 12.89-16.24 20.48-8.57l114.16 115.89a12.08 12.08 0 0 1 0 17L276.32 380.41c-7.49 7.67-20.48 2.22-20.48-8.57v-71.51H140a12.08 12.08 0 0 1-12-12.1z"></path>
        </g>
    </svg>
)

class TableRoute extends React.Component {
    state = {
        data: null,
        loaded: null,
        loading: true
    };

    componentDidMount() {
        this.fetch();
    }

    async componentDidUpdate(prevProps) {
        if (
            prevProps.modelId !== this.props.modelId ||
            prevProps.recordId !== this.props.recordId
        ) {
            await this.fetch();
        }
    }

    fetch = async () => {
        this.setState({
            loading: true
        });
        const { modelId, recordId } = this.props.match.params;

        const response = await api.request({
            url: `/record/${modelId}/${recordId}`,
            method: "get"
        });

        this.setState({
            data: response.data.data,
            loaded: modelId + recordId,
            loading: false
        });
    };

    isLoading = () =>
        this.state.loading ||
        this.state.loaded !== this.props.modelId + this.props.recordId;

    handleRequest = async params => {
        console.log('handleRequest', params)

        const response = await api.request({
            method: "post",
            url: "/component/has-many",
            data: {
                componentId: params.id,
                modelId: params.modelId,
                recordId: params.recordId,
            }
        })

        console.log(response)

        return response
    }

    render() {
        if (this.isLoading()) {
            return <Loader />;
        }

        const { data } = this.state;
        const schema = this.props.state.toJS()

        const { modelId, recordId } = this.props
        const model = schema.ModelDatas[modelId]
        const record = data[modelId + 'Datas'][recordId]
        const title = record[model.primaryField || 'id']
        console.log("data", data);

        return (
            <div
                className={css`
                    padding-top: 70px;
                `}
            >
                <Content>
                    <div className={"container-fluid"}>
                        <div className={"row"}>
                            <ModelDetailPage
                                components={{
                                    ComingSoon: () => (
                                        <div>
                                            coming soon
                                        </div>
                                    )
                                }}
                                modelDetailPage={this.props.modelDetailPage.toJS()}
                                schema={schema}
                                data={this.state.data}
                                modelId={this.props.modelId}
                                recordId={this.props.recordId}
                                onRequest={this.handleRequest}
                            />
                        </div>
                    </div>
                </Content>
                <div
                    className={css`
                    position: fixed;
                    top: 0;
                    left: 250px;
                    right: 0;
            height: 70px;
            border-bottom: 1px solid #ebebeb;
            background-color: #fff;
          `}
                >
                    <div
                        className={css`
              padding: 0 30px;
            `}
                    >
                        <div
                            className={css`
                font-size: 26px;
                display: flex;
                align-items: center;
                height: 70px;
              `}
                        >
                            <div>
                                <Link
                                    className={css`
                    color: #b3b3b3;
                    text-decoration: none;
                    cursor: pointer;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    transition: 200ms ease color;
                    &:hover {
                        color: #000;
                    }
                  `}
                                    to={`/explorer/${this.props.modelId}`}
                                >
                                    <div
                                        className={css`
                                            background-color: rgb(var(--primaryColor));
                                            color: #fff;
                                            width: 34px;
                                            height: 34px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            border-radius: 6px;
                                            margin-right: 16px;
                                        `}
                                    >
                                        {icons.list({ height: 18 })}
                                    </div>
                                    {this.props.model.get("plural")}
                                </Link>
                            </div>
                            <div
                                className={css`
                  display: flex;
                  margin-left: 12px;
                  margin-right: 12px;
                  color: #b3b3b3;
                `}
                            >
                                /
                            </div>
                            <div>{title ? title : 'Untitled'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        state,
        modelId: props.match.params.modelId,
        recordId: props.match.params.recordId,
        model: state.getIn(["ModelDatas", props.match.params.modelId]),
        modelDetailPage: state.getIn([
            "ModelDetailPageDatas",
            props.match.params.modelId
        ])
    };
})(TableRoute);
