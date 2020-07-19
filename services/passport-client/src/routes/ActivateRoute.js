import React from 'react'
import {css, cx, keyframes} from 'emotion'
import Layout from '../components/Layout'
import api from '../services/api'
import getQuery from '../services/getQuery'
import icons from '../icons'
import t from '../t'

const blinkAnimation = keyframes`
      from { 
        opacity: 1.0; 
      }
      to { 
        opacity: 0.0; 
      }
`

const loadingDot = css`
  animation-name: ${blinkAnimation};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
`

export default class ActivateRoute extends React.Component {

    state = {
        verifying: false
    }

    componentWillMount() {

        if (!getQuery().token) {
            this.props.history.push('/')
            return
        }

        this.setState({
            verifying: true
        })

        setTimeout(() => this.confirmRegistration(), 2000)
    }

    async confirmRegistration() {

        console.log('confirm registration', getQuery().token)

        const response = await api.request({
            method: 'POST',
            data: {
                query: `
                    mutation confirmRegistration($token: ID!) {
                        confirmRegistration(token: $token)
                    }
                `,
                variables: {
                    token: getQuery().token
                }
            }
        })

        if (!response.data.errors || !response.data.errors.length) {
            this.setState({
                confirmed: true
            })
        }
    }

    renderVerifying() {

        return (
            <Layout>
                <div
                    className={css`
                    text-align: center;
                `}
                >
                    <h1>
                        {t('Activate.title')}
                        <span className="loading">
                        <span className={loadingDot}>.</span>
                        <span className={cx(loadingDot, css`
                            animation-delay: 0.2s;
                        `)}>.</span>
                        <span className={cx(loadingDot, css`
                            animation-delay: 0.4s;
                        `)}>.</span>
                    </span>
                    </h1>
                </div>
            </Layout>
        )
    }

    renderConfirmation() {

        return (
            <Layout>
                <div
                    className={css`
                        display: flex;
                        justify-content: center;
                        margin-bottom: 32px;
                    `}
                >
                    <div
                        className={css`
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #000;
                        color: #fff;
                    `}
                    >
                        {icons.check({
                            width: 28
                        })}
                    </div>
                </div>
                <div
                    className={css`
                        text-align: center;
                    `}
                >
                    <h1>
                        {t('Activate.confirmedTitle')}
                    </h1>
                    <div className={css`line-height: 1.4;`}>
                        {t('Activate.confirmedDescription')}
                    </div>
                </div>
            </Layout>
        )
    }

    render() {

        if (this.state.confirmed) {
            return this.renderConfirmation()
        }

        if (this.state.verifying) {
            return this.renderVerifying()
        }

        return null
    }
}