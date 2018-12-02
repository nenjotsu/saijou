import { handleActions } from 'redux-actions';
import * as ACTION from '../../actions/intl';
import model from './model';

export default handleActions(
  {
    [ACTION.switchLocale]: (state, action) => {
      return {
        ...state,
        default: {
          ...state[`intl_${action.payload}`]
        }
      };
    }
  },
  model
);
