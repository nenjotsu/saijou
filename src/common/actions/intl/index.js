import { createAction } from 'redux-actions';
import * as TYPE from './types';

export const switchLocale = createAction(TYPE.SWITCH_LOCALE);
