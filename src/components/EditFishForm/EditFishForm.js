import React, { Component } from 'react';
import './EditFishForm.css';

class EditFishForm extends Component {
  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const {
      fish: { name, price, status, desc, image },
      deleteFish,
      index
    } = this.props;

    return (
      <div className='fish-edit'>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
          value={name}
        />
        <input
          type='text'
          name='price'
          onChange={this.handleChange}
          value={price}
        />
        <select name='status' onChange={this.handleChange} value={status}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea name='desc' onChange={this.handleChange} value={desc} />
        <input
          type='text'
          name='image'
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={() => deleteFish(index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
