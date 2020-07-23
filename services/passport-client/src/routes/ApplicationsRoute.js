import React from 'react'
import {css} from 'emotion'
import Page from '../Page'
import Button from '../components/Button'
import LoadingState from '../components/LoadingState'
import ApplicationItem from '../components/ApplicationItem'
import api from '../services/api'

export default class ApplicationsRoute extends React.Component {

    state = {
        applications: null
    }

    async componentDidMount() {

        await this.fetch()
    }

    fetch = async () => {

        const response = await api.request({
            method: 'post',
            data: {
                query: `
                    query applications {
                        viewer {
                            applications {
                                id
                                name
                                brandImageUrl
                                createdAt
                            }
                        }
                    }
                `
            }
        })

        this.setState({
            applications: response.data.data.viewer.applications
        })

    }

    render() {

        const {applications} = this.state

        if (!applications) return (
            <Page>
                <LoadingState/>
            </Page>
        )

        return (
            <Page>
                <div
                    className={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 60px;
                    `}
                >
                    <Button
                        type={'button'}
                        onClick={() => this.props.history.push('/applications/create')}
                    >
                        Register new application
                    </Button>
                </div>
                <h1>Manage applications</h1>
                <p
                    className={css`
                        opacity: 0.5;
                        line-height: 1.7;
                        margin-bottom: 48px;
                    `}
                >
                    {applications.length ? `
                        Register your application. This will enable the users of your applications to authenticate using our
                        unique sign in process branded by your custom application name and logo.
                    ` : 'You haven\'t registered any applications yet.'}
                </p>
                <div
                    className={css`
                        margin-left: -8px;
                        margin-right: -8px;
                    `}
                >
                    {applications.map(application => (
                        <ApplicationItem
                            key={application.id}
                            brandImageUrl={application.brandImageUrl}
                            name={application.name}
                            createdAt={application.createdAt}
                            onClick={() => this.props.history.push('/applications/edit/' + application.id)}
                        />
                    ))}
                </div>
            </Page>
        )
    }
}