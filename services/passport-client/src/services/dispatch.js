import { fromJS } from 'immutable'

export default (state, action) => {

    switch (action.type) {

        case 'SET_STATE': {
            return state.merge(fromJS(action.payload))
        }

        case 'SET_SESSION': {
            return state.set('session', action.payload)
        }

        case 'CLEAR_SESSION': {
            return state.set('session', null)
        }

        case 'CREATE_USER': {
            return state.set('user', fromJS(action.payload))
        }

        default: {
            return state
        }
    }
}