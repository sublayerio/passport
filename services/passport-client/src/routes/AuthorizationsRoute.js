import React from 'react'
import {css} from 'emotion'
import Layout from '../components/Layout'
import Link from '../components/Link'
import LoadingState from '../components/LoadingState'
import ApplicationItem from '../components/ApplicationItem'
import api from '../services/api'

export default class AuthorizationsRoute extends React.Component {

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
                    query authorizations {
                        viewer {
                            authorizations {
                                application {
                                    id
                                    name
                                    brandImageUrl
                                }
                                createdAt
                            }
                        }
                    }
                `
            }
        })

        this.setState({
            authorizations: response.data.data.viewer.authorizations
        })

    }

    render() {

        const {authorizations} = this.state

        if (!authorizations) return (
            <Layout>
                <LoadingState/>
            </Layout>
        )

        return (
            <Layout>
                <div
                    className={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 60px;
                    `}
                >
                    <Link href={'/dashboard'}>
                        Go back
                    </Link>
                </div>
                <h1>Authorized Applications</h1>
                <p
                    className={css`
                        opacity: 0.5;
                        line-height: 1.7;
                        margin-bottom: 48px;
                    `}
                >
                    {authorizations.length ? 'By revoking access the application won\'t be able to get your profile information.' : 'You don\'t have any authorized applications yet. Sign in to one of your applications first.'}

                </p>
                <div
                    className={css`
                        margin-left: -8px;
                        margin-right: -8px;
                    `}
                >
                    {authorizations.map(authorization => (
                        <ApplicationItem
                            key={authorization.application.id}
                            id={authorization.application.id}
                            brandImageUrl={authorization.application.brandImageUrl}
                            name={authorization.application.name}
                            createdAt={authorization.createdAt}
                            onRevoke={this.handleRevoke}
                        />
                    ))}
                </div>
            </Layout>
        )
    }

    handleRevoke = async ({id}) => {

        const confirmed = window.confirm('Are you sure?')

        if (!confirmed) return

        await api.request({
            method: 'post',
            data: {
                query: `
                    mutation revokeAccess($applicationId: ID!) {
                        revokeAccess(applicationId: $applicationId)
                    }
                `,
                variables: {
                    applicationId: id,
                }
            }
        })

        await this.fetch()
    }
}