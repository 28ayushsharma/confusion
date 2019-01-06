import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import { DISHES } from '../shared/dishes';

import Menu from './menuComponent';
import Dishdetail from './DishdetailComponent';

class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            dishes: DISHES,
            selectedDish : null
        };

    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId});

        console.log(this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish )[0]);
    }

    render() {
    return (
      <div>
        <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante confusion</NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}
            onClick = {(dishId) => this.onDishSelect(dishId)}
         />
        <Dishdetail dish={this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish )[0]}/>
      </div>
    );
  }
}

export default Main;
