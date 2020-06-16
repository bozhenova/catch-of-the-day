import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Header from '../Header/Header';
import Order from '../Order/Order';
import Inventory from '../Inventory/Inventory';
import sampleFishes from '../../sample-fishes';
import Fish from '../Fish/Fish';
import base from '../../base';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { storeId } = this.props.match.params;
    const localStorageRef = localStorage.getItem(storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    const { storeId } = this.props.match.params;

    localStorage.setItem(storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    //we can't use 'delete' here because of firebase
    fishes[key] = null;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  removeFromOrder = key => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <div>
        <button
          className='go-back'
          onClick={() => this.props.history.push('catch-of-the-day/')}
        >
          Go Back
        </button>
        <div className='catch-of-the-day'>
          <div className='menu'>
            <Header tagline='Fresh Seafood Market' />
            <ul className='fishes'>
              {Object.keys(this.state.fishes).map(key => (
                <Fish
                  key={key}
                  index={key}
                  addToOrder={this.addToOrder}
                  details={this.state.fishes[key]}
                  removeFromOrder={this.removeFromOrder}
                />
              ))}
            </ul>
          </div>
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes}
            storeId={this.props.match.params.storeId}
            updateFish={this.updateFish}
            deleteFish={this.deleteFish}
          />
        </div>
      </div>
    );
  }
}

export default App;
