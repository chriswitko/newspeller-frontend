/*
 * App Actions
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
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_FEEDS,
  LOAD_FEEDS_SUCCESS,
  LOAD_FEEDS_ERROR,
  ADD_TOPIC,
  ADD_TOPIC_SUCCESS,
  REMOVE_TOPIC,
  REMOVE_TOPIC_SUCCESS,
  REMOVE_DAY,
  REMOVE_DAY_SUCCESS,
  ADD_DAY,
  ADD_DAY_SUCCESS,
  REMOVE_HOUR,
  REMOVE_HOUR_SUCCESS,
  ADD_HOUR,
  ADD_HOUR_SUCCESS,
  USER_AUTHORIZE,
  USER_SUCCESS,
  USER_ERROR,
  USER_LOGOUT,
  UPDATE_TIMEZONE,
  UPDATE_TIMEZONE_SUCCESS,
  UPDATE_GROUPBY,
  UPDATE_GROUPBY_SUCCESS
} from './constants'

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadFeeds () {
  return {
    type: LOAD_FEEDS
  }
}

export function loadRepos () {
  return {
    type: LOAD_REPOS
  }
}

export function addNewHour (hour) {
  return {
    type: ADD_HOUR,
    hour
  }
}

export function addTopic (topic) {
  return {
    type: ADD_TOPIC,
    topic
  }
}

export function addHourSuccess (hour) {
  return {
    type: ADD_HOUR_SUCCESS,
    hour
  }
}

export function updateTimezoneSuccess (timezone) {
  return {
    type: UPDATE_TIMEZONE_SUCCESS,
    timezone
  }
}

export function updateGroupBySuccess (groupBy) {
  return {
    type: UPDATE_GROUPBY_SUCCESS,
    groupBy
  }
}

export function authorizeUser (email, password) {
  return {
    type: USER_AUTHORIZE,
    email,
    password
  }
}

export function authorizeSuccess (user) {
  return {
    type: USER_SUCCESS,
    user
  }
}

export function authorizeError (err) {
  return {
    type: USER_ERROR,
    err
  }
}

export function logoutUser () {
  return {
    type: USER_LOGOUT
  }
}
/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */

export function updateTimezone (timezone) {
  return {
    type: UPDATE_TIMEZONE,
    timezone
  }
}

export function updateGroupBy (groupBy) {
  return {
    type: UPDATE_GROUPBY,
    groupBy
  }
}

export function removeHourSuccess (hour) {
  return {
    type: REMOVE_HOUR_SUCCESS,
    hour
  }
}

export function removeDaySuccess (day) {
  return {
    type: REMOVE_DAY_SUCCESS,
    day
  }
}

export function addDaySuccess (day) {
  return {
    type: ADD_DAY_SUCCESS,
    day
  }
}

export function addTopicSuccess (topic) {
  return {
    type: ADD_TOPIC_SUCCESS,
    topic
  }
}

export function reposLoaded (repos, subscriptions, timezone, groupBy, days, hours, nextAt, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    subscriptions,
    timezone,
    groupBy,
    days,
    hours,
    nextAt,
    username
  }
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError (error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  }
}

export function feedsLoaded (repos) {
  return {
    type: LOAD_FEEDS_SUCCESS,
    repos
  }
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function feedLoadingError (error) {
  return {
    type: LOAD_FEEDS_ERROR,
    error
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


export function removeDay (day) {
  return {
    type: REMOVE_DAY,
    day
  }
}

export function addDay (day) {
  return {
    type: ADD_DAY,
    day
  }
}

export function removeHour (hour) {
  return {
    type: REMOVE_HOUR,
    hour
  }
}

