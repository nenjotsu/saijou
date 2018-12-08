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

const ComingSoon = Loadable({
  loader: () => import('./components/ComingSoon'),
  loading: () => null
});
const Jumbotron = Loadable({
  loader: () => import('./components/Jumbotron'),
  loading: () => null
});

const Login = Loadable({
  loader: () => import('./components/Login'),
  loading: () => null
});

class Home extends Component {
  render() {
    const { intl } = this.props;
    return (
      <main>
        <section className="n-section bg-white">
          <RSOnLoad>
            <ComingSoon />
          </RSOnLoad>
        </section>
        {/* <section className="n-section bg-white">
          <RSOnLoad>
            <Jumbotron data={intl.messages.jumbotron} />
          </RSOnLoad>
        </section>
        <section className="n-section bg-white">
          <RSOnLoad>
            <Login />
          </RSOnLoad>
        </section>
        <section className="n-section bg-gray-001">
          <RSOnLoad>
            <Login />
          </RSOnLoad>
        </section>
        <section className="n-section bg-white">
          <RSOnLoad>
            <Login />
          </RSOnLoad>
        </section>

        <section className="n-section bg-maroon">
          <RSOnLoad>
            <Login />
          </RSOnLoad>
        </section>
        <section className="n-section bg-white">
          <RSOnLoad>
            <Login />
          </RSOnLoad>
        </section> */}
      </main>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
