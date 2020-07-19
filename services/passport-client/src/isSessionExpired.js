import moment from 'moment'
import fromSession from './fromSession'

export default session => {

    const decoded = fromSession(session)

    const now = moment()
    const exp = moment(decoded.exp * 1000)

    return now.isAfter(exp)
}