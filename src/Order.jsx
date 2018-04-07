import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h3>Productos</h3>

        <p>Enchiladas de Frijol $10,000</p>

        <p>Total: $ 10,000</p>
      </div>
    );
  }

}
