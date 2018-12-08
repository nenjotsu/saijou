import { combineReducers } from 'redux';
import { reducer as responsiveReducer } from 'react-responsive-redux';
import intlReducer from './intlReducer';

const rootReducer = combineReducers({
  intl: intlReducer,
  responsive: responsiveReducer
});

export default rootReducer;
