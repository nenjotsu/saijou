import React, { Component } from 'react';
import Loading from '../images/loading.svg';

class LoadingComponent extends Component {
  state = {};
  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    };

    return (
      <div style={style}>
        <img src={Loading} alt="loading" />
      </div>
    );
  }
}

export default LoadingComponent;
