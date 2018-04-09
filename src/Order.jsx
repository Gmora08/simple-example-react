import React, { Component } from 'react';
import PropTypes from 'prop-types';


 const Order = props => {
    return (
      <div>
        <h3>Productos</h3>
        {props.order.map((dish, index) => {
          return(
          <div key={index} className='row'>
          <p>{dish.name}  <span>{dish.price}</span></p>
          </div>)
        }

        )}

        <p>Total:{props.total}</p>
      </div>
    );
}

Order.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
}

export default Order;
