import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
// import './App.css';

class Counter extends Component {
  render() {
    const {
      counter,
      increment,
      decrement,
      incrementAsync,
      incrementIfOdd
    } = this.props;
    return (
      <div className="App">
        <p>
          Clicked: {counter} times <button onClick={increment}>+</button>{' '}
          <button onClick={decrement}>-</button>{' '}
          <button onClick={incrementIfOdd}>Increment if odd</button>{' '}
          <button onClick={() => incrementAsync()}>Increment async</button>
        </p>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
