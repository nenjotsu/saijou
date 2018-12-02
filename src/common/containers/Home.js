import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as intl from '../actions/intl';

const mapStateToProps = state => ({
  intl: state.intl.default
});

function mapDispatchToProps(dispatch) {
  return { reduxAction: bindActionCreators({ ...intl }, dispatch), dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
