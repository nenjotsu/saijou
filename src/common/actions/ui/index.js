import { createAction } from 'redux-actions';
import * as TYPE from './types';

export const showSpinner = createAction(TYPE.SHOW_SPINNER);
export const hideSpinner = createAction(TYPE.HIDE_SPINNER);
export const showSpinnerWayPoint = createAction(TYPE.SHOW_SPINNER_WAY_POINT);
export const hideSpinnerWayPoint = createAction(TYPE.HIDE_SPINNER_WAY_POINT);
