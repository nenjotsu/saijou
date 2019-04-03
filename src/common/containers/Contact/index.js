import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contact from './View';
import * as intl from '../../actions/intl';
import * as ui from '../../actions/ui';

const mapStateToProps = state => ({
  intl: state.intl.default,
});

function mapDispatchToProps(dispatch) {
  return {
    reduxAction: bindActionCreators({ ...intl, ...ui }, dispatch),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
