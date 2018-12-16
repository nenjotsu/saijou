import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import View from './View';
import * as intl from '../../../actions/intl';

const mapStateToProps = state => ({
  intl: state.intl.default,
  footerServicesList: state.intl.default.messages.footerServicesList,
  footerCompanyList: state.intl.default.messages.footerCompanyList,
  footerSupportList: state.intl.default.messages.footerSupportList
});

function mapDispatchToProps(dispatch) {
  return { reduxAction: bindActionCreators({ ...intl }, dispatch), dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
