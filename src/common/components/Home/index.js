import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import RSOnLoad from '../../transitions/OnLoad';

const propTypes = {
  reduxAction: PropTypes.object.isRequired,
  intl: PropTypes.object
};

const defaultProps = {
  intl: {}
};

const Welcome = Loadable({
  loader: () => import('./Welcome'),
  loading: () => null
});

const Login = Loadable({
  loader: () => import('../Login'),
  loading: () => null
});

class Home extends Component {
  render() {
    const { intl } = this.props;
    return (
      <main>
        <section className="n-section">
          <RSOnLoad>
            <div>
              <Welcome data={intl.messages.jumbotron} />
              <Login />
            </div>
          </RSOnLoad>
        </section>
      </main>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
