import React from 'react'
import {css} from 'emotion'
import Link from '../components/Link'
import Page from '../Page'
import FormGroup from '../components/FormGroup'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import api from '../services/api'

export default class ApplicationCreateRoute extends React.Component {

    state = {
        name: '',
        termsOfServiceUrl: '',
        privacyPolicyUrl: '',
        supportEmail: '',
        brandImageUrl: '',
    }

    render() {

        return (
            <Page>
                <Link href={'/applications'}>
                    Go back
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create application</h1>
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
                            <Button type={'submit'}>
                                Save
                            </Button>
                        </div>
                    </FormGroup>
                </form>
            </Page>
        )
    }

    handleSubmit = async (e) => {

        e.preventDefault()

        const {name, termsOfServiceUrl, privacyPolicyUrl, brandImageUrl, supportEmail} = this.state

        await api.request({
            method: 'post',
            data: {
                query: `
                    mutation createApplication($input: CreateApplicationInput!) {
                        createApplication(input: $input) {
                            id
                        }
                    }
                `,
                variables: {
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