import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false,
        }
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Wrapper>
                <Toolbar drawerToggleClicked={ this.sideDrawerToggleHandler }/>
                <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerClosedHandler } />
                <main className={ classes.content }>
                    { this.props.children }
                </main>
            </Wrapper>
        );
    }
}
    

export default Layout;