import React, { Component } from 'react';

import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
          <Header></Header>
        <Menu dishes = {this.state.dishes}
            onClick = {(dishId) => this.onDishSelect(dishId)}
         />
        <Dishdetail dish={this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish )[0]}/>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
