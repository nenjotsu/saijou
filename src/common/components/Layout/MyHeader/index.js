import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import View from './View';
import * as intl from '../../../actions/intl';

const mapStateToProps = state => ({
  intl: state.intl.default,
  menuList: state.intl.default.messages.menuList
});

function mapDispatchToProps(dispatch) {
  return { reduxAction: bindActionCreators({ ...intl }, dispatch), dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
