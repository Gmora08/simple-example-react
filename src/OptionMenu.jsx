import React, { Component } from 'react';
import PropTypes from 'prop-types';

const OptionMenu = (props) => {
  const handleMenuChange = (e) => {
    e.preventDefault();
    props.changeSelectedMenu(props.name)
  }

  return (
    <div className="option-menu">
      <button onClick={handleMenuChange}>{props.name}</button>
    </div>
  )
}

OptionMenu.propTypes = {
  name: PropTypes.string.isRequired,
  changeSelectedMenu: PropTypes.func.isRequired,
}

export default OptionMenu;
