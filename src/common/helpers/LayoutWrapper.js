import React from 'react';
import Layout from '../components/Layout';

class WithLayout extends React.Component {
  componentDidUpdate(nextProps, nextState) {
    console.log('WithLayout componentDidUpdate nextProps', nextProps);
    console.log('WithLayout componentDidUpdate nextState', nextState);
  }

  render() {
    return <Layout>{this.props.children}</Layout>;
  }
}

export default WithLayout;
