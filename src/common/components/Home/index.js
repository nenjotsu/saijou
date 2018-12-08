import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import {
  PhoneScreen,
  TabletScreen,
  MobileScreen,
  DesktopScreen
} from 'react-responsive-redux';
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

// const RSOnLoad = Loadable({
//   loader: () => import('../../transitions/OnLoad'),
//   loading: () => null
// });

class Home extends Component {
  render() {
    const { intl } = this.props;
    return (
      <main>
        <section className="n-section bg-white">
          <RSOnLoad>
            <div>
              <Welcome data={intl.messages.jumbotron} />
              <div>
                <PhoneScreen>Phone Screen</PhoneScreen>
                <TabletScreen>Tablet Screen</TabletScreen>
                <MobileScreen>
                  <div>You are a mobile device</div>
                </MobileScreen>
                <DesktopScreen>
                  <div>You are a desktop</div>
                </DesktopScreen>
              </div>
            </div>
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
        </section>
      </main>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
