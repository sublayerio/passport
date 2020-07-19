import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import icons from './icons2'
import {Container, Sidebar, MenuBrand, MenuContainer, Menu, MenuSeparator, MenuItem} from '@cmds/sidebar'

class Layout extends React.Component {

    render() {

        const theme = 'dark'

        return (
            <div>
                <Container>
                    <Sidebar theme={theme}>
                        <MenuBrand
                            theme={theme}
                            imageFitTypeId={'cover'}
                            imageUrl={'https://avatars2.githubusercontent.com/u/66509471?s=200&v=4'}
                            title={'Passport'}
                            description={'v1.0.0'}
                        />
                        <MenuContainer>
                            <Menu>
                                <MenuItem
                                    theme={theme}
                                    icon={icons.statistics}
                                    title={'Dashboard'}
                                    active={window.location.href.indexOf('/dashboard') !== -1}
                                    onClick={() => this.props.history.push('/dashboard')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.payments}
                                    title={'Applications'}
                                    active={window.location.href.indexOf('/applications') !== -1}
                                    onClick={() => this.props.history.push('/applications')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.administration}
                                    title={'Sessions'}
                                    active={window.location.href.indexOf('/sessions') !== -1}
                                    onClick={() => this.props.history.push('/sessions')}
                                />
                                <MenuSeparator large={true} theme={theme}/>
                                <MenuItem
                                    theme={theme}
                                    icon={icons.account}
                                    small={true}
                                    title={'Profile'}
                                    active={window.location.href.indexOf('/profile') !== -1}
                                    onClick={() => this.props.history.push('/profile')}
                                />
                                <MenuItem
                                    theme={theme}
                                    icon={icons.signout}
                                    small={true}
                                    title={'Sign out'}
                                    onClick={this.handleSignOut}
                                />
                            </Menu>
                        </MenuContainer>
                    </Sidebar>
                    {this.props.children}
                </Container>
            </div>
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

export default withRouter(connect()(Layout))