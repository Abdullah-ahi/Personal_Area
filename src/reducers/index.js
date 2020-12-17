import { combineReducers } from 'redux';

import { areaReducer } from './PersonalArea'

export const rootReducer = combineReducers({
  area: areaReducer,
});