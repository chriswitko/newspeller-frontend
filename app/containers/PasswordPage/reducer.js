/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable'

import {
  CHANGE_USERNAME,
  SAVE_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  REPORT_ERROR,
  CHANGE_PASSWORD
} from './constants'

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
  reset: false,
  updated: false,
  error: false,
  loading: false
})

function localReducer (state = initialState, action) {
  switch (action.type) {
    case REPORT_ERROR:
      return state
        .set('error', action.err)
    case SAVE_PASSWORD_SUCCESS:
      return state
        .set('updated', true)
        .set('error', '')
    case RESET_PASSWORD_SUCCESS:
      return state
        .set('reset', true)
        .set('error', '')
    case CHANGE_USERNAME:
      return state
        .set('username', action.name)
        .set('error', '')
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password)
        .set('error', '')
    default:
      return state
  }
}

export default localReducer
