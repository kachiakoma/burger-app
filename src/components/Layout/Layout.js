import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.css'

const layout = (props) => (
    <Wrapper>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={ classes.content }>
            { props.children }
        </main>
    </Wrapper>
);

export default layout;