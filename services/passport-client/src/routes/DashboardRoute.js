import React from 'react'
import {connect} from 'react-redux'
import {css} from 'emotion'
import Page from '../Page'
import Link from '../components/Link'
import FormGroup from '../components/FormGroup'
import LoadingState from '../components/LoadingState'
import icons from '../icons2'
import api from "../services/api";

const ButtonCard = ({href, icon, title, children}) => (
    <a
        href={href}
        className={css`
            display: block;
            border-radius: 6px;
            padding: 16px;
            text-decoration: none;
            margin-bottom: 24px;
            color: #000;
            cursor: pointer;
            user-select: none;
            &:active {
                background-color: rgba(0, 0, 0, 0.05);
            }
        `}
    >
        {icon({width: 28, className: css`margin-bottom: 8px;`})}
        <h3
            className={css`
                margin-top: 0;
                margin-bottom: 8px;
                line-height: 1.4;
            `}
        >{title}</h3>
        <p
            className={css`
                font-size: 14px;
                line-height: 1.7;
                opacity: 0.5;
                margin-bottom: 0;
            `}
        >
            {children}
        </p>
    </a>
)

class DashboardRoute extends React.Component {

    state = {
        loading: true,
        displayName: '',
    }

    async componentDidMount() {
        await this.fetch()
    }

    fetch = async () => {

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

        const {
            displayName,
        } = response.data.data.viewer.me

        this.setState({
            loading: false,
            displayName,
        })
    }

    render() {

        const {displayName, loading} = this.state

        if (loading) return (
            <Page>
                <LoadingState/>
            </Page>
        )

        return (
            <Page>
                <div
                    className={css`
                        display: flex;
                        justify-content: flex-end;
                        margin-bottom: 60px;
                    `}
                >
                    <Link onClick={this.handleSignOut}>
                        Sign out
                    </Link>
                </div>
                <FormGroup>
                    <div
                        className={css`
                            opacity: 0.75;
                            font-size: 18px;
                            margin-bottom: 48px;
                        `}
                    >
                        Hi <strong>{displayName}</strong>, <br/><br/>
                        Thanks for making use of Sublayer Account!
                    </div>
                </FormGroup>
                <div
                    className={css`
                        margin-left: -16px;
                        margin-right: -16px;
                    `}
                >
                    <ButtonCard
                        href={'/profile'}
                        title={'Change your profile'}
                        icon={icons.account}
                    >
                        Change your first name, last name or a display name you are comfortable with. Let others know who
                        you are by uploading a profile picture.
                    </ButtonCard>
                    <ButtonCard
                        href={'/applications'}
                        title={'Register your own applications'}
                        icon={icons.payments}
                    >
                        Register your application. This will enable the users of your applications to authenticate using our
                        unique sign in process branded by your custom application name and logo.
                    </ButtonCard>
                </div>
            </Page>
        )
    }

    handleSignOut = () => {

        this.props.dispatch({
            type: 'SET_SESSION',
            payload: null
        })

        this.props.history.push('/')
    }
}

export default connect()(DashboardRoute)