import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Radio from 'antd/lib/radio';
import BrandLogo from '../../../images/navbar-logo.png';

const { Header } = Layout;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const propTypes = {
  menuList: PropTypes.array
};

const defaultProps = {
  menuList: []
};

const contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
};

class MyHeaderView extends React.Component {
  constructor(props) {
    super(props);
    const menu = props.location.pathname.replace('/', '');
    this.state = {
      dafaultMenu: menu || 'home',
      defaultLanguage: props.intl.locale || 'en-US'
    };
  }
  switchLocale = e => {
    const lang = e.target.value;
    this.props.reduxAction.switchLocale(lang);
    this.setState({ defaultLanguage: lang });
  };

  handleClick = e => {
    this.setState({
      dafaultMenu: e.key
    });
  };

  render() {
    const { dafaultMenu, defaultLanguage } = this.state;
    const { menuList = [] } = this.props;
    return (
      <Header className="main-header">
        <Link to="/">
          <div className="brand-logo">
            <img className="brand-logo-img" src={BrandLogo} alt="Brand Logo" />
          </div>
        </Link>
        <div className="main-navbar">
          <RadioGroup
            defaultValue={defaultLanguage}
            size="small"
            onChange={this.switchLocale}
          >
            <RadioButton value="en-US">EN</RadioButton>
            <RadioButton value="ja">JP</RadioButton>
          </RadioGroup>
        </div>

        <div className="main-navbar">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[dafaultMenu]}
            mode="horizontal"
          >
            {menuList.map(menu => (
              <Menu.Item key={menu.title.toLowerCase()}>
                <Link to={menu.to}>{menu.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Header>
    );
  }
}

MyHeaderView.propTypes = propTypes;
MyHeaderView.defaultProps = defaultProps;
MyHeaderView.contextTypes = contextTypes;

export default withRouter(MyHeaderView);
