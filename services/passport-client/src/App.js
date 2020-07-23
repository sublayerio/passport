import React from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'emotion'
import { Router, Switch, Route } from 'react-router-dom'
import SignInRoute from './routes/SignInRoute'
import ActivateRoute from './routes/ActivateRoute'
import TableRoute from './routes/TableRoute'
import RecordRoute from './routes/RecordRoute'
import Layout from './Layout'
import history from './history'
import FetchSchema from './FetchSchema'

import getSession from '@sublayer/passport-components/lib/getSession'
import Passport from '@sublayer/passport-components/lib/Passport'

injectGlobal`
    * {
        box-sizing: border-box;
    }
`

class App extends React.Component {

    render() {

        const session = getSession()

        return (
            <Passport redirect={false}>
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
                            <FetchSchema>
                                <Layout>
                                    <Route exact path="/explorer/:modelId" component={TableRoute} />
                                    <Route
                                        exact
                                        path="/explorer/:modelId/:recordId"
                                        component={RecordRoute}
                                    />
                                </Layout>
                            </FetchSchema>
                        ) : null}
                    </Switch>
                </Router>
            </Passport>
        )
    }
}

export default connect(state => ({
    session: state.get('session')
}))(App)