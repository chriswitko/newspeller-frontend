/*
 * AppReducer
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
  USER_LOGOUT
} from './constants'

// The initial state of the App
const initialState = fromJS({
  reset: false,
  loading: false,
  error: false,
  currentUser: false,
  token: false,
  channels: [],
  userData: {
    language: 'en',
    nextAt: '',
    timezone: 'Europe/London',
    email: '',
    groupBy: 'channels',
    subscriptions: false,
    repositories: false,
    days: false,
    hours: false,
    confirmed_at: false
  }
})

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      window.localStorage.setItem('currentUser', '')
      window.localStorage.setItem('token', '')
      window.location.href = '/'
      return state
        .set('token', false)
    default:
      return state
  }
}

export default appReducer
