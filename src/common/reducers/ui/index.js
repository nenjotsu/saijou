import { handleActions } from 'redux-actions';
import * as ACTION from '../../actions/UI';
import model from './model';

export default handleActions(
  {
    [ACTION.showSpinner]: state => {
      console.log('show spinner count');
      return {
        ...state,
        isLoading: true
      };
    },
    [ACTION.hideSpinner]: state => {
      console.log('hide spinner count');
      return {
        ...state,
        isLoading: false
      };
    },
    [ACTION.showSpinnerWayPoint]: state => {
      console.log('hide spinner count');
      return {
        ...state,
        isWaypointLoading: true
      };
    },
    [ACTION.hideSpinnerWayPoint]: state => {
      console.log('hide spinner count');
      return {
        ...state,
        isWaypointLoading: false
      };
    }
  },
  model
);
