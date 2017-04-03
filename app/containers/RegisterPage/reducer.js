/*
 * RegisterReducer
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
  CHANGE_PASSWORD,
  CHANGE_TIMEZONE,
  CHANGE_LANGUAGE,
  FORM_MISSING_FIELDS_ERROR,
  USER_SEND_ACTIVATION_SUCCESS
 } from './constants'

// The initial state of the App
const initialState = fromJS({
  token: '',
  password: '',
  timezone: 'Europe/London',
  language: 'English',
  loading: false,
  error: false
})

function localReducer (state = initialState, action) {
  switch (action.type) {
    case USER_SEND_ACTIVATION_SUCCESS:
      return state
        .set('token', action.user.token)
        .set('loading', false)
    case FORM_MISSING_FIELDS_ERROR:
      return state
        .set('error', 'errorRequiredFields')
        .set('loading', false)
    case CHANGE_TIMEZONE:
      return state
        .set('timezone', action.timezone)
        .set('error', false)
    case CHANGE_LANGUAGE:
      return state
        .set('language', action.language)
        .set('error', false)
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password)
        .set('error', false)
    default:
      return state
  }
}

export default localReducer
