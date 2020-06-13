import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Order from '../Order/Order';
import Inventory from '../Inventory/Inventory';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
