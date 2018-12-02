import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import { Spring } from 'react-spring';

const propTypes = {
  reduxAction: PropTypes.object,
  intl: PropTypes.object
};

const defaultProps = {
  reduxAction: {},
  intl: {}
};

// const Welcome = Loadable({
//   loader: () => import('./Welcome'),
//   loading: () => null
// });

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log({ username, password });
  };

  render() {
    const { intl } = this.props;
    const { username, password } = this.state;
    return (
      <div>
        {/* <Welcome data={intl.messages.jumbotron} /> */}
        <h3> Login Page</h3>
        <Spring
          config={{ delay: 3000 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <div style={props}>
              <Input
                className="n-input"
                type="text"
                onChange={this.onUsernameChange}
                value={username}
              />
              <Input
                className="n-input"
                type="password"
                onChange={this.onPasswordChange}
                value={password}
              />
              <Button className="n-btn" onClick={this.onSubmit}>
                Login
              </Button>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
export default Login;
