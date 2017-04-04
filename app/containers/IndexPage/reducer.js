/*
 * IndexReducer
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
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  FORM_MISSING_FIELDS_ERROR,
  USER_REGISTER
 } from './constants'

// The initial state of the App
const initialState = fromJS({
  token: '',
  username: '',
  loading: false,
  error: false
})

const localReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return state
        .set('loading', true)
    case FORM_MISSING_FIELDS_ERROR:
      return state
        .set('error', 'errorRequiredFields')
        .set('loading', false)
    case USER_REGISTER_ERROR:
      return state
        .set('error', 'errorUserExists')
        .set('loading', false)
    case USER_REGISTER_SUCCESS:
      return state
        .set('loading', false)
        .set('currentUser', action.user.email)
        .set('token', action.user.token)
    case CHANGE_USERNAME:
      return state
        .set('username', action.name)
        .set('error', false)
    default:
      return state
  }
}

export default localReducer
