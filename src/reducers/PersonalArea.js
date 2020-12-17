import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { signIn, add, remove, load } from 'actions/PersonalArea'

const initialState = new Map({
  entries: new Map({
    profile: new Map(),
    contacts: new Map(),
  }),
})

export const areaReducer = handleActions({
  
  [signIn]: (state, action) => {
    return state.setIn(['entries', 'profile'], fromJS(action.payload))
  },
  [add]: (state, action) => {
    const { id } = action.payload
    return state.setIn(['entries', 'contacts', id], fromJS({...action.payload}))
  },
  [remove]: (state, action) => {
    return state.removeIn(['entries', 'contacts', action.payload])
  }
  
}, initialState)