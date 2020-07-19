import store from './services/store'
import history from './history'

export default () => {
    store.dispatch({
        type: 'CLEAR_SESSION'
    })
    history.push('/')
}