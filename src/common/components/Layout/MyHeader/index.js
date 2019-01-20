import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import View from './View';
import * as intl from '../../../actions/intl';

const mapStateToProps = ({ intl }) => ({
  intl: intl.default,
  activeMenu: intl.default.messages.activeMenu,
  menuList: intl.default.messages.menuList,
});

function mapDispatchToProps(dispatch) {
  return { reduxAction: bindActionCreators({ ...intl }, dispatch), dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
