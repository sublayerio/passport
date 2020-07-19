import React from 'react'
import {connect} from 'react-redux'
import {injectGlobal} from 'emotion'
import {Router, Switch, Route} from 'react-router-dom'
import DashboardRoute from './routes/DashboardRoute'
import SignInRoute from './routes/SignInRoute'
import ActivateRoute from './routes/ActivateRoute'
import ApplicationCreateRoute from './routes/ApplicationCreateRoute'
import ApplicationEditRoute from './routes/ApplicationEditRoute'
import ApplicationsRoute from './routes/ApplicationsRoute'
import SessionsRoute from './routes/SessionsRoute'
import ProfileRoute from './routes/ProfileRoute'
import Layout from './Layout'
import history from './history'
import getUser from './getUser'
import getCode from './getCode'
import clearSession from './clearSession'
import isSessionExpired from './isSessionExpired'
import api from './services/api'

injectGlobal`
    * {
        box-sizing: border-box;
    }
`

class Authenticated extends React.Component {

    state = {
        loading: true
    }

    async componentDidMount() {

        const {session} = this.props

        const sessionExpired = isSessionExpired(session)

        if (sessionExpired) {
            clearSession()
            return
        }

        try {
            await getUser()
        } catch (e) {
            clearSession()
            return
        }

        this.setState({
            loading: false
        })
    }

    render() {

        if (this.state.loading) {

            return (
                <div>
                    Fetching user...
                </div>
            )
        }

        return this.props.children
    }
}

Authenticated = connect((state) => ({
    session: state.get('session')
}))(Authenticated)

class App extends React.Component {

    async componentDidMount() {
        await this.fetch()
    }

    fetch = async () => {

        const code = getCode()

        if (!code) {
            return
        }

        try {

            const response = await api.request({
                method: 'post',
                data: {
                    query: `
                    mutation authenticate($code: String!) {
                        authenticate(code: $code)
                    }
                `,
                    variables: {
                        code
                    }
                }
            })

            if (response.data.errors) {
                history.push('/')
                return
            }

            this.props.dispatch({
                type: 'SET_SESSION',
                payload: response.data.data.authenticate
            })

            history.push('/dashboard')

        } catch (e) {
            history.push('/')
        }
    }

    render() {

        const {session} = this.props

        return (
            <Router history={history}>
                <Switch>
                    <Route
                        exact={true}
                        path={'/'}
                        component={SignInRoute}
                    />
                    <Route
                        path={'/activate'}
                        component={ActivateRoute}
                    />
                    {session ? (
                        <Authenticated>
                            <Layout>
                                <Route
                                    path={'/dashboard'}
                                    exact={true}
                                    component={DashboardRoute}
                                />
                                <Route
                                    path={'/profile'}
                                    exact={true}
                                    component={ProfileRoute}
                                />
                                <Route
                                    path={'/applications'}
                                    exact={true}
                                    component={ApplicationsRoute}
                                />
                                <Route
                                    path={'/sessions'}
                                    exact={true}
                                    component={SessionsRoute}
                                />
                                <Route
                                    path={'/applications/create'}
                                    exact={true}
                                    component={ApplicationCreateRoute}
                                />
                                <Route
                                    path={'/applications/edit/:id'}
                                    exact={true}
                                    component={ApplicationEditRoute}
                                />
                            </Layout>
                        </Authenticated>
                    ) : null}
                </Switch>
            </Router>
        )
    }
}

export default connect(state => ({
    session: state.get('session')
}))(App)