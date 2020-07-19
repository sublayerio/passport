import React from 'react'
import {css} from 'emotion'
import {connect} from 'react-redux'
import Layout from '../components/Layout'
import SignInForm from '../components/SignInForm'
import VerifyingSession from '../components/VerifyingSession'
import api from '../services/api'
import getQuery from '../services/getQuery'
import t from '../t'

class SignInRoute extends React.Component {

    state = {
        state: 'FETCH', // (FETCH, SIGN_IN, SUBMITTING, VERIFYING, VERIFIED),
        companyName: null,
        registrationId: null,
        securityCode: null,
        email: ''
    }

    getClientId = () => {
        return getQuery().clientId || window._env_.REACT_APP_CLIENT_ID
    }

    getRedirectUrl = () => {
        return getQuery().redirectUrl || window._env_.REACT_APP_CLIENT_URL
    }

    async componentWillMount() {

        const clientId = this.getClientId()

        if (clientId === window._env_.REACT_APP_CLIENT_ID && this.props.session) {
            this.props.history.push('/dashboard')
            return
        }

        await
            this.fetch()
    }

    fetch = async () => {

        const response = await api.request({
            method: 'POST',
            data: {
                query: `
                    query application($id: ID!) {
                        viewer {
                            application(id: $id) {
                                id
                                name
                                brandImageUrl
                                supportEmail
                                termsOfServiceUrl
                                privacyPolicyUrl
                            }
                        }
                    }
                `,
                variables: {
                    id: this.getClientId()
                }
            }
        })

        if (response.error) {

            this.setState({
                error: response.error
            })

            return
        }

        this.setState({
            state: 'SIGN_IN',
            companyName: response.data.data.viewer.application.name,
            termsOfServiceUrl: response.data.data.viewer.application.termsOfServiceUrl,
            privacyPolicyUrl: response.data.data.viewer.application.privacyPolicyUrl,
            brandImageUrl: response.data.data.viewer.application.brandImageUrl,
            supportEmail: response.data.data.viewer.application.supportEmail
        })
    }

    verifyRegistration = async () => {

        const {registrationId} = this.state

        const response = await api.request({
            method: 'POST',
            data: {
                query: `
                    mutation verifyRegistration($id: ID!) {
                        verifyRegistration(id: $id) {
                            id
                        }
                    }
                `,
                variables: {
                    id: registrationId
                }
            }
        })

        if (!response.error) {

            if (this.interval) {
                clearInterval(this.interval)
                this.interval = null
            }

            const sessionId = response.data.data.verifyRegistration.id

            this.setState({
                state: 'VERIFIED',
                sessionId
            })

            setTimeout(() => {

                const url = new URL(this.getRedirectUrl())
                url.searchParams.set('code', sessionId)

                window.location.href = url.href
            })
        }
    }

    render() {

        const {
            companyName,
            termsOfServiceUrl,
            privacyPolicyUrl,
            brandImageUrl,
            supportEmail,
            email,
            securityCode,
            state,
            error
        } = this.state

        if (error) {

            return (
                <Layout>
                    <div
                        className={css`
                            text-align: center;
                        `}
                    >
                        Error: {error}
                    </div>
                </Layout>
            )
        }

        return (
            <Layout>
                {state === 'SIGN_IN' || state === 'SUBMITTING' ? (
                    <SignInForm
                        title={getQuery().title || t('SignInForm.title')}
                        buttonLabel={getQuery().button_label || t('SignInForm.buttonLabel')}
                        submitting={state === 'SUBMITTING'}
                        email={email}
                        onEmailChange={this.handleEmailChange}
                        companyName={companyName}
                        brandImageUrl={brandImageUrl}
                        termsOfServiceUrl={termsOfServiceUrl}
                        privacyPolicyUrl={privacyPolicyUrl}
                        supportEmail={supportEmail}
                        onSubmit={this.handleSignIn}
                    />
                ) : null}
                {state === 'VERIFYING' ? (
                    <VerifyingSession
                        email={email}
                        securityCode={securityCode}
                        onClose={this.handleStopVerifying}
                    />
                ) : null}
                {state === 'VERIFIED' ? (
                    <div>
                        {/* Verified ({this.state.sessionId}) */}
                    </div>
                ) : null}
            </Layout>
        )
    }

    handleEmailChange = e => {

        this.setState({
            email: e.target.value
        })
    }

    handleStopVerifying = () => {

        this.setState({
            state: 'SIGN_IN',
            securityCode: null
        })
    }

    handleSignIn = async (e) => {

        const {email} = this.state

        e.preventDefault()

        this.setState({
            state: 'SUBMITTING'
        })

        if (this.interval) {
            clearInterval(this.interval)
            this.interval = null
        }

        const response = await api.request({
            method: 'post',
            data: {
                query: `
                  mutation createRegistration($clientId: ID!, $email: String!) {
                    createRegistration(clientId: $clientId, email: $email) {
                        id
                        securityCode
                    }
                  }
                `,
                variables: {
                    clientId: this.getClientId(),
                    email
                }
            }
        })

        this.setState({
            state: 'VERIFYING',
            registrationId: response.data.data.createRegistration.id,
            securityCode: response.data.data.createRegistration.securityCode
        }, () => {

            this.interval = setInterval(() => this.verifyRegistration(), 1000)
        })
    }
}

export default connect(state => ({
    session: state.get('session')
}))(SignInRoute)