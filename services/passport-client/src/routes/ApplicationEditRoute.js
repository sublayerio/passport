import React from 'react'
import {css} from 'emotion'
import Link from '../components/Link'
import Page from '../Page'
import FormGroup from '../components/FormGroup'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import api from '../services/api'
import LoadingState from "../components/LoadingState";

export default class ApplicationEditRoute extends React.Component {

    state = {
        loading: true,
        name: '',
        termsOfServiceUrl: '',
        privacyPolicyUrl: '',
        supportEmail: '',
        brandImageUrl: '',
        clientId: '',
        clientSecret: '',
    }

    async componentDidMount() {
        await this.fetch()
    }

    fetch = async () => {

        const response = await api.request({
            method: 'post',
            data: {
                query: `
                    query application($id: ID!) {
                        viewer {
                            application(id: $id) {
                                id
                                name
                                clientId
                                clientSecret
                                termsOfServiceUrl
                                privacyPolicyUrl
                                supportEmail
                                brandImageUrl
                            }
                        }
                    }
                `,
                variables: {
                    id: this.props.match.params.id
                }
            }
        })

        const {
            name,
            termsOfServiceUrl,
            privacyPolicyUrl,
            supportEmail,
            brandImageUrl,
            clientId,
            clientSecret
        } = response.data.data.viewer.application

        this.setState({
            loading: false,
            name,
            termsOfServiceUrl,
            privacyPolicyUrl,
            supportEmail,
            brandImageUrl,
            clientSecret,
            clientId
        })
    }

    render() {

        if (this.state.loading) return (
            <Page>
                <LoadingState/>
            </Page>
        )

        return (
            <Page>
                <Link href={'/applications'}>
                    Go back
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <h1>Application</h1>
                    <h2>
                        Developer info
                    </h2>
                    <FormGroup>
                        <Label>Client ID</Label>
                        <Input
                            disabled={true}
                            defaultValue={this.state.clientId}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Client Secret</Label>
                        <Input
                            disabled={true}
                            defaultValue={this.state.clientSecret}
                        />
                    </FormGroup>
                    <h2>
                        Update information
                    </h2>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                            value={this.state.name}
                            onChange={e => this.setState({name: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Support Email Address</Label>
                        <Input
                            value={this.state.supportEmail}
                            onChange={e => this.setState({supportEmail: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Terms of Service</Label>
                        <Input
                            value={this.state.termsOfServiceUrl}
                            onChange={e => this.setState({termsOfServiceUrl: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Privacy Policy</Label>
                        <Input
                            value={this.state.privacyPolicyUrl}
                            onChange={e => this.setState({privacyPolicyUrl: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Brand Image</Label>
                        <Input
                            value={this.state.brandImageUrl}
                            onChange={e => this.setState({brandImageUrl: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div
                            className={css`
                                display: flex;
                                justify-content: flex-end;
                            `}
                        >
                            <Button
                                type={'button'}
                                theme={'danger'}
                                className={css`
                                    margin-right: 8px;
                                `}
                                onClick={this.handleRemove}
                            >
                                Remove
                            </Button>
                            <Button type={'submit'}>
                                Save
                            </Button>
                        </div>
                    </FormGroup>
                </form>
            </Page>
        )
    }

    handleRemove = async () => {

        const confirmed = window.confirm('Are you sure?')

        if (!confirmed) return

        await api.request({
            method: 'post',
            data: {
                query: `
                    mutation removeApplication($id: ID!) {
                        removeApplication(id: $id)
                    }
                `,
                variables: {
                    id: this.props.match.params.id,
                }
            }
        })

        this.props.history.push('/applications')
    }

    handleSubmit = async (e) => {

        e.preventDefault()

        const {name, termsOfServiceUrl, privacyPolicyUrl, brandImageUrl, supportEmail} = this.state

        await api.request({
            method: 'post',
            data: {
                query: `
                    mutation updateApplication($id: ID!, $input: UpdateApplicationInput!) {
                        updateApplication(id: $id, input: $input) {
                            id
                        }
                    }
                `,
                variables: {
                    id: this.props.match.params.id,
                    input: {
                        name,
                        termsOfServiceUrl,
                        privacyPolicyUrl,
                        brandImageUrl,
                        supportEmail
                    }
                }
            }
        })

        this.props.history.push('/applications')
    }
}