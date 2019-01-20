import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Radio from 'antd/lib/radio';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Menu from 'antd/lib/menu';
import withMedia from '../../../helpers/WithMediaQueries';
import BrandLogo from '../../../images/navbar-logo.png';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const propTypes = {
  media: PropTypes.object,
  location: PropTypes.object,
  menuList: PropTypes.array,
  activeMenu: PropTypes.string,
};

const defaultProps = {
  media: {},
  location: {},
  menuList: [],
  activeMenu: 'home',
};

const contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

class MyHeaderView extends React.Component {
  constructor(props) {
    super(props);
    const menu = props.location.pathname.replace('/', '');
    this.state = {
      dafaultMenu: menu || 'home',
      defaultLanguage: props.intl.locale || 'en-US',
    };
  }

  // UNSAFE_componentWillMount(nextProps) {}

  // componentDidMount() {}

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('UNSAFE_componentWillReceiveProps nextProps', nextProps);
  // }

  // componentDidUpdate(nextProps, nextState) {
  //   console.log('componentDidUpdate nextProps', nextProps);
  //   console.log('componentDidUpdate nextState', nextState);
  // }

  // componentWillUnmount() {}

  switchLocale = e => {
    const lang = e.target.value;
    this.props.reduxAction.switchLocale(lang);
    this.setState({ defaultLanguage: lang });
  };

  handleClick = e => {
    this.setState({
      dafaultMenu: e.key,
    });
  };

  render() {
    const { dafaultMenu, defaultLanguage } = this.state;
    const { menuList = [], media } = this.props;
    return (
      <Row>
        <Col xs={0} lg={2} />
        <Col xs={24} s={4} md={3} lg={4}>
          <Link to="/">
            <div className="brand-logo">
              <img
                className="brand-logo-img"
                src={BrandLogo}
                alt="Brand Logo"
              />
            </div>
          </Link>
        </Col>
        <Col xs={0} md={21} lg={16}>
          <div className="main-navbar intl">
            <RadioGroup
              defaultValue={defaultLanguage}
              size="small"
              onChange={this.switchLocale}
            >
              <RadioButton value="en-US">EN</RadioButton>
              {/* <RadioButton value="ja">JP</RadioButton> */}
            </RadioGroup>
          </div>

          <div className="main-navbar">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[dafaultMenu]}
              mode="horizontal"
            >
              {menuList.map(menu => {
                return (
                  <Menu.Item
                    key={menu.title.toLowerCase()}
                    className={!media.big ? 'tablet-main-menu-text' : ''}
                  >
                    <Link to={menu.to}>{menu.title}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
        </Col>
        <Col xs={0} lg={2} />
      </Row>
    );
  }
}

MyHeaderView.propTypes = propTypes;
MyHeaderView.defaultProps = defaultProps;
MyHeaderView.contextTypes = contextTypes;

export default withRouter(withMedia(MyHeaderView));
