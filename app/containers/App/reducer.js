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
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_FEEDS_SUCCESS,
  LOAD_FEEDS,
  LOAD_FEEDS_ERROR,
  REMOVE_TOPIC,
  REMOVE_TOPIC_SUCCESS,
  REMOVE_DAY,
  ADD_DAY,
  ADD_DAY_SUCCESS,
  REMOVE_HOUR,
  REMOVE_HOUR_SUCCESS,
  ADD_HOUR,
  ADD_HOUR_SUCCESS,
  ADD_TOPIC,
  ADD_TOPIC_SUCCESS
} from './constants'

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  channels: false,
  userData: {
    nextAt: '',
    repositories: false,
    days: false,
    hours: false
  }
})

const strToMin = str => {
  const [hours, minutes] = str.split(':')
  return (hours * 60) + minutes
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TOPIC:
      return state
        .setIn(['userData', 'repositories'], [...state.getIn(['userData', 'repositories']), action.topic])
        .setIn(['channels'], state.getIn(['channels']).filter(channel => channel !== action.topic))
    case ADD_TOPIC_SUCCESS:
      return state
        .setIn(['channels'], state.getIn(['channels']))
    case REMOVE_TOPIC_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], state.getIn(['userData', 'repositories']))
    case ADD_HOUR:
      return state
        .setIn(['userData', 'hours'], [...state.getIn(['userData', 'hours']), action.hour].sort((a, b) => strToMin(a) - strToMin(b)))
    case ADD_HOUR_SUCCESS:
      return state
        .setIn(['userData', 'hours'], state.getIn(['userData', 'hours']))
    case ADD_DAY_SUCCESS:
      return state
        .setIn(['userData', 'days'], state.getIn(['userData', 'days']))
    case REMOVE_HOUR_SUCCESS:
      return state
        .setIn(['userData', 'hours'], state.getIn(['userData', 'hours']))
    case REMOVE_HOUR:
      return state
        .setIn(['userData', 'hours'], state.getIn(['userData', 'hours']).filter(hour => hour !== action.hour))
    case ADD_DAY:
      return state
        .setIn(['userData', 'days'], [...state.getIn(['userData', 'days']), action.day])
    case REMOVE_DAY:
      return state
        .setIn(['userData', 'days'], state.getIn(['userData', 'days']).filter(day => day !== action.day))
    case REMOVE_TOPIC:
      return state
        .setIn(['userData', 'repositories'], state.getIn(['userData', 'repositories']).filter(source => source !== action.name))
    case LOAD_FEEDS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['channels'], false)
    case LOAD_FEEDS_SUCCESS:
      const all = []
      action.repos.map(channel => {
        channel.sections.map(section => all.push(`${channel.code}_${section.code}`))
      })
      // console.log('all', all)
      // console.log('repo', state.getIn(['userData', 'repositories']))
      return state
        .setIn(['channels'], all)
        .set('loading', false)
    case LOAD_FEEDS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false)
    case LOAD_REPOS_SUCCESS:
      // console.log('action.repos', action.repos)
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .setIn(['userData', 'days'], action.days)
        .setIn(['userData', 'hours'], action.hours)
        .setIn(['userData', 'nextAt'], action.nextAt)
        .set('loading', false)
        .set('currentUser', action.username)
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default appReducer
