import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Dish = props => {
  const handleOrder = e => {
    e.preventDefault();
    props.orderDish(props.name, props.price)
  }
  return(
  <div className="dish col-md-4">
    <img src={props.image} alt={props.name} width='100%' height='200px'/>
    <p>{props.name}</p>
    <button onClick={handleOrder}>Agregar</button>
  </div>
)
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Dish;
