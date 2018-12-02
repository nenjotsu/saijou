import { combineReducers } from 'redux';
import counter from './counter';
import intlReducer from './intlReducer';

const rootReducer = combineReducers({
  counter,
  intl: intlReducer
});

export default rootReducer;
