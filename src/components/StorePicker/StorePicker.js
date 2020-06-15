import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../../helpers';
import './StorePicker.css';

class StorePicker extends Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  goToStore = e => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type='text'
          ref={this.myInput}
          required
          placeholder='Store Name'
          defaultValue={getFunName()}
        ></input>
        <button type='submit'>Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
