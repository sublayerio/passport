import React from 'react'
import {css} from 'emotion'
import Link from '../components/Link'
import Page from '../Page'
import FormGroup from '../components/FormGroup'
import Label from '../components/Label'
import Input from '../components/Input'
import LoadingState from '../components/LoadingState'
import Button from '../components/Button'
import api from "../services/api";

export default class ProfileRoute extends React.Component {

    state = {
        loading: true,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
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
                                firstName
                                lastName
                                email
                            }
                        }
                    }
                `
            }
        })

        const {
            id,
            firstName,
            lastName,
            email,
        } = response.data.data.viewer.me

        this.setState({
            loading: false,
            id,
            firstName,
            lastName,
            email,
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
                <Link href={'/dashboard'}>
                    Go back
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <h1>Change your profile</h1>
                    <FormGroup>
                        <Label>First name</Label>
                        <Input
                            value={this.state.firstName}
                            onChange={e => this.setState({firstName: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last name</Label>
                        <Input
                            value={this.state.lastName}
                            onChange={e => this.setState({lastName: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email address</Label>
                        <Input
                            disabled={true}
                            defaultValue={this.state.email}
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

        const {id, firstName, lastName} = this.state

        await api.request({
            method: 'post',
            data: {
                query: `
                    mutation updateUser($id: ID!, $input: UpdateUserInput!) {
                        updateUser(id: $id, input: $input) {
                            id
                        }
                    }
                `,
                variables: {
                    id,
                    input: {
                        firstName,
                        lastName,
                    }
                }
            }
        })

        this.props.history.push('/dashboard')
    }
}