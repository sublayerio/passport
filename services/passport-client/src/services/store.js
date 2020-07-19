import moment from 'moment'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import dispatch from './dispatch'
import initialState from './initialState'
import getItem from './getItem'
import removeItem from './removeItem'
import setItem from './setItem'
import fromSession from '../fromSession'

const logger = createLogger({
    stateTransformer: state => state.toJS()
})

const store = createStore(
    dispatch,
    initialState,
    applyMiddleware(logger),
)

store.subscribe(() => {
    const session = store.getState().get('session')
    if (!session) {
        removeItem('session')
    } else {
        setItem('session', session)
    }
})

const session = getItem('session')

if (session) {

    const decoded = fromSession(session)

    console.log(`[loaded session from localStorage] expires: ${moment(decoded.exp * 1000).calendar()}`)

    store.dispatch({
        type: 'SET_SESSION',
        payload: session
    })
}


export default store