import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dish from './Dish';

const Dishes = props => (
  <div>
    {/*
      dishes: {dinners: Array(2)}
      foodKey: "dinners"
      [{…}, {…}]
    */}
    {
      props.dishes[props.foodKey].map((dish) => (
        <Dish key={dish.name} name={dish.name} image={dish.image} />
      ))
    }
  </div>
)

Dishes.propTypes = {
  foodKey: PropTypes.string.isRequired,
  dishes: PropTypes.object.isRequired,
}

export default Dishes;
