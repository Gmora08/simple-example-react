import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Dish = props => (
  <div className="dish">
    <img src={props.image} alt={props.name} />
    <p>{props.name}</p>
  </div>
);

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Dish;
