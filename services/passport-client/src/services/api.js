import axios from 'axios'
import clearSession from '../clearSession'
import store from './store'
import get from 'lodash/get'

const handleResponse = response => {

    const session = response.headers['x-token']

    if (session) {
        store.dispatch({
            type: 'REFRESH_SESSION',
            payload: session
        })
    }

    return response
}

export default {
    request: async (options) => {

        let headers = {
            'Content-Type': 'application/json'
        }

        const session = store.getState().get('session')

        if (session) {
            headers['Authorization'] = `Bearer ${window.btoa(`session:${session}`)}`
        }

        const instance = axios.create({
            baseURL: window._env_.REACT_APP_API_URL,
            headers
        })

        const handleError = error => {

            if (error === 'AUTHENTICATION_REQUIRED') {
                clearSession()
                throw error
            }
        }

        try {

            let response = await instance.request(options)

            response = handleResponse(response)

            const error = get(response, 'data.errors[0].message')

            if (error) {
                handleError(error)

                return {
                    error
                }
            }

            return {
                data: response.data
            }

        } catch (exception) {

            const error = get(exception, 'response.data.errors[0].message')

            if (error) {
                handleError(error)
            }

            return {
                error: error ? error : 'Connection error'
            }
        }
    }
}