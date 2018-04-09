import React, { Component } from 'react';

import Menu from './Menu';
import Order from './Order';
import Dishes from './Dishes';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      selectedFoodOption: 0,
      total: 0,
      order: [],
      food: [{
        breakfasts: [
          {image: 'https://www.goya.com/media/3805/huevos-rancheros.jpg?width=470', name: 'Huevos Rancheros', price: 35},
          {image: 'http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/12/birria.jpg', name: 'Birria', price: 55},
        ]
      },
      {
        meals: [
          {image: 'https://cdn.shopify.com/s/files/1/1417/1098/products/mole_rojo_1024x1024.jpg?v=1472394064', name: 'Mole con pollo', price: 135},
          {image: 'http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/07/camaronesempanizados.jpg', name: 'Camarones', price: 155},
        ]
      },
      {
        dinners: [
          {image: 'http://tmbnotes.co/image/cache/18-800x800.jpg', name: 'Chocomilk', price: 32},
          {image: 'http://sabrosano.com/wp-content/uploads/2015/10/shutterstock_199771358.jpg', name: 'Conchas', price: 15},
        ]
      },
    ]
    };

    this.getMenuOptions = this.getMenuOptions.bind(this);
    this.changeSelectedMenu = this.changeSelectedMenu.bind(this);
    this.orderDish = this.orderDish.bind(this);
  }

  // Return the options of the menu in an array
  getMenuOptions(foodArray) {
    const options = foodArray.map((option) => {
      const optionName = Object.keys(option);
      return optionName[0]
    })
    return options;
  }

  // change option selected of the menu
  changeSelectedMenu(optionName) {
    switch (optionName) {
      case 'breakfasts':
        this.setState({ selectedFoodOption: 0 });
        return true;
      case 'meals':
        this.setState({ selectedFoodOption: 1 });
        return true;
      default:
        this.setState({ selectedFoodOption: 2 });
        return true;
    }
  }

  orderDish(dish, price) {
    const orderedDish = {name: dish, price: price};
    this.state.order.push(orderedDish);
    this.setState(this.state);
    // console.log(this.state.order);
    this.setState({total: this.state.total + price})
  }

  render() {
    const menuOptions = this.getMenuOptions(this.state.food) // ['breakfasts', 'meals', 'dinners']
    // console.log(this.state.food[this.state.selectedFoodOption]);
    // console.log(menuOptions[this.state.selectedFoodOption]);
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-6">
            <Menu options={menuOptions} changeSelectedMenu={this.changeSelectedMenu} />
            <Dishes dishes={this.state.food[this.state.selectedFoodOption]} foodKey={menuOptions[this.state.selectedFoodOption]} orderDish={this.orderDish}/>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-6">
            <Order order={this.state.order} total={this.state.total}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
