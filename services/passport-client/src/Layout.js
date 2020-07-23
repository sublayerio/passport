import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import icons from './icons2'
import { Container, Sidebar, MenuBrand, MenuContainer, Menu, MenuSeparator, MenuItem } from '@sublayer/ui/lib/sidebar'
import history from './history'

const plug = props => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g><path fill="currentColor" d="M288,0a32,32,0,0,0-32,32V160h64V32A32,32,0,0,0,288,0ZM96,0A32,32,0,0,0,64,32V160h64V32A32,32,0,0,0,96,0Z" fillOpacity="0.6"></path><path fill="currentColor" d="M384,176v32a16,16,0,0,1-16,16H352v32A160.07,160.07,0,0,1,224,412.8V512H160V412.8A160.07,160.07,0,0,1,32,256V224H16A16,16,0,0,1,0,208V176a16,16,0,0,1,16-16H368A16,16,0,0,1,384,176Z"></path></g></svg>
)
class ModelListPageNavItem extends React.Component {

    render() {

        if (!this.props.model) {
            return <MenuItem
                {...this.props}
                icon={icons.list}
                title={`Model "${this.props.modelId}" not found`}
            />
        }

        const iconKey = this.props.model.get("icon");
        const url = `/explorer/${this.props.modelId}`;

        const icon = icons[iconKey] ? icons[iconKey] : icons.list

        console.log({
            icon
        })

        return (
            <MenuItem
                {...this.props}
                title={this.props.model.get("plural")}
                icon={icon}
                active={this.props.history.location.pathname.indexOf(url) !== -1}
                onClick={() => history.push(url)}
            />
        );
    }
}

ModelListPageNavItem = withRouter(ModelListPageNavItem);

ModelListPageNavItem = connect((state, props) => {
    return {
        model: state.getIn(["ModelDatas", props.modelId])
    };
})(ModelListPageNavItem);

const navItemTypes = {
    ModelListPage: ModelListPageNavItem
};
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
                            imageUrl={window._env_.REACT_APP_BRAND_IMAGE_URL}
                            title={window._env_.REACT_APP_TITLE}
                            description={'v1.0.0'}
                        />
                        <MenuContainer>
                            <Menu>
                                {this.props.navItems.toJS().map(navItem => {
                                    const Component = navItemTypes[navItem.type];

                                    console.log("Component", Component, navItem);

                                    return <Component theme={theme} {...navItem} />;
                                })}
                                <MenuSeparator large={true} theme={theme} />
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

export default withRouter(connect((state, props) => {

    return {
        navItems: state.get('NavItem').map(id => state.getIn(['NavItemDatas', id]))
    }
})(Layout))