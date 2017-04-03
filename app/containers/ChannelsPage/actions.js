/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  USER_RESEND_ACTIVATION,
  USER_RESEND_ACTIVATION_SUCCESS,
  USER_RESEND_ACTIVATION_ERROR,
  ADD_TOPIC,
  ADD_TOPIC_SUCCESS,
  ADD_TOPIC_ERROR,
  REMOVE_TOPIC,
  REMOVE_TOPIC_SUCCESS,
  REMOVE_TOPIC_ERROR,
  LOAD_USER_DATA,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_ERROR,
  LOAD_FEEDS,
  LOAD_FEEDS_SUCCESS,
  LOAD_FEEDS_ERROR
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function resendActivationEmail (user) {
  return {
    type: USER_RESEND_ACTIVATION,
    user
  }
}

export function resendActivationEmailSuccess (user) {
  return {
    type: USER_RESEND_ACTIVATION_SUCCESS,
    user
  }
}

export function resendActivationEmailError (user) {
  return {
    type: USER_RESEND_ACTIVATION_ERROR,
    user
  }
}

export function addTopic (topic) {
  return {
    type: ADD_TOPIC,
    topic
  }
}

export function addTopicSuccess (topic) {
  return {
    type: ADD_TOPIC_SUCCESS,
    topic
  }
}

export function addTopicError (err) {
  return {
    type: ADD_TOPIC_ERROR,
    err
  }
}

export function removeTopic (name) {
  return {
    type: REMOVE_TOPIC,
    name
  }
}

export function removeTopicSuccess (topic) {
  return {
    type: REMOVE_TOPIC_SUCCESS,
    topic
  }
}

export function removeTopicError (err) {
  return {
    type: REMOVE_TOPIC_ERROR,
    err
  }
}

export function loadUserData () {
  return {
    type: LOAD_USER_DATA
  }
}

export function reposLoaded (data) {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    data
  }
}

export function repoLoadingError (error) {
  return {
    type: LOAD_USER_DATA_ERROR,
    error
  }
}

export function loadFeeds (args = {}) {
  return {
    type: LOAD_FEEDS,
    args
  }
}

export function feedsLoaded (data) {
  return {
    type: LOAD_FEEDS_SUCCESS,
    data
  }
}

export function feedLoadingError (error) {
  return {
    type: LOAD_FEEDS_ERROR,
    error
  }
}
