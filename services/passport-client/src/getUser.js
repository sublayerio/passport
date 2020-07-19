import api from './services/api'
import store from './services/store'

export default async () => {

    const response = await api.request({
        method: 'post',
        data: {
            query: `
                query {
                    viewer {
                        me {
                            id
                            displayName
                        }
                    }
                }
            `
        }
    })

    store.dispatch({
        type: 'GET_USER_SUCCESS',
        payload: {
            data: response.data.data.viewer.me
        }
    })
}