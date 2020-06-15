import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../helpers';

import './Fish.css';

class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }),
    addToOrder: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { addToOrder, index } = this.props;
    addToOrder(index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
