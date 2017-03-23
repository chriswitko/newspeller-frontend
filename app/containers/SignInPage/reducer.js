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
  CHANGE_PASSWORD,
  USER_SUCCESS,
  USER_ERROR,
  FORM_MISSING_FIELDS_ERROR,
  USER_AUTHORIZE
 } from './constants'

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
  loading: false,
  error: false
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case USER_AUTHORIZE:
      return state
        .set('loading', true)
    case FORM_MISSING_FIELDS_ERROR:
      return state
        .set('error', 'Missing required fields')
        .set('loading', false)
    case USER_ERROR:
      return state
        .set('error', 'User does not exists')
        .set('loading', false)
    case USER_SUCCESS:
      return state
        .set('loading', false)
        .set('currentUser', action.user.email)
        .set('token', action.user.token)
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

export default homeReducer
