import { handleActions } from 'redux-actions';
import * as ACTION from '../../actions/intl';
import model from './model';

export default handleActions(
  {
    [ACTION.switchLocale]: (state, action) => {
      return {
        ...state,
        default: {
          ...state[`intl_${action.payload}`],
        },
      };
    },
    [ACTION.setActiveMenu]: (state, action) => {
      console.log(action.payload);
      const result = {
        ...state,
        default: {
          ...state.default,
          messages: {
            ...state.default.messages,
            activeMenu: action.payload,
          },
        },
      };
      debugger;
      return result;
    },
  },
  model,
);
