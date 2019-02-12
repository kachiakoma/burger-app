import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                             salad: 1,
                             bacon: 2,
                             cheese: 2,
                             meat: 2,
                         },
        };
    }
    render() {
        return (
            <Wrapper>
                <Burger ingredients={ this.state.ingredients }/>
                <BuildControls />
            </Wrapper>
        );
    }
}

export default BurgerBuilder;