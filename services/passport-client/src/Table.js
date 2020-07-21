import React from 'react'
import { css } from 'emotion'
import Table from '@sublayer/ui/lib/table'
// import '@sublayer/ui/lib/table/index.css'
import './Table.css'
import api from './services/api'

const noop = () => { }

class App extends React.Component {

    state = {
        loading: true,
        schema: null
    }

    async componentDidMount() {

        const response = await api.request({
            method: 'get',
            url: '/schema'
        })

        const response2 = await api.request({
            method: 'get',
            url: `/records/${this.props.modelId}`
        })

        this.setState({
            schema: response.data.data,
            data: response2.data.data,
            loading: false
        })
    }

    render() {

        if (this.state.loading) {
            return null
        }

        console.log(this.state)

        return (
            <div
            className={css`
            position: relative;
          width: 100%;
          height: 600px;
          border: 1px solid #d4d4d4;
          border-radius: 12px;
          overflow: hidden;
        `}
          >
            <Table
              modelId={this.props.modelId}
              schema={this.state.schema}
              data={this.state.data}
              onPageRefresh={noop}
              onRecordClick={noop}
            />
          </div>
        )
    }
}

export default App