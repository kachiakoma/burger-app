import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [ classes.SideDrawer, classes.Close ];
    if( props.open ) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Wrapper>
            <BackDrop show={ props.open } clicked={ props.closed } />        
            <div className={ attachedClasses.join(' ') }>
                <div className={ classes.Logo }>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems active={ props.open }/>
                </nav>
            </div>
        </Wrapper>
    );
}

export default sideDrawer;