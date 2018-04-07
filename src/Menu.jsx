import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OptionMenu from './OptionMenu';

const Menu = props => (
  <div id="menu">
    {
      props.options.map((option) => (
        <OptionMenu key={option} name={option} changeSelectedMenu={props.changeSelectedMenu} />
      ))
    }
  </div>
)

Menu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeSelectedMenu: PropTypes.func.isRequired,
};

export default Menu;
