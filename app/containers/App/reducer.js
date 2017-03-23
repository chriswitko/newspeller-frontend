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
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA,
  LOAD_USER_DATA_ERROR,
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
  ADD_TOPIC_SUCCESS,
  USER_LOGOUT,
  UPDATE_TIMEZONE_SUCCESS,
  UPDATE_GROUPBY_SUCCESS,
  REMOVE_ACCOUNT_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_SEND_ACTIVATION_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  SAVE_PASSWORD_SUCCESS,
  CHANGE_LANGUAGE_SUCCESS
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

const strToMin = str => {
  const [hours, minutes] = str.split(':')
  return (hours * 60) + minutes
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE_SUCCESS:
      return state
        .setIn(['userData', 'language'], action.locale)
    case SAVE_PASSWORD_SUCCESS:
      window.location.href = '/signin'
      return state
    case RESET_PASSWORD_SUCCESS:
      return state
        .set('reset', true)
    case REMOVE_ACCOUNT_SUCCESS:
      window.localStorage.setItem('currentUser', '')
      window.localStorage.setItem('token', '')
      window.location.href = '/signin'
      return state
        .set('token', false)
    case USER_LOGOUT:
      window.localStorage.setItem('currentUser', '')
      window.localStorage.setItem('token', '')
      window.location.href = '/'
      return state
        .set('token', false)
    case USER_SEND_ACTIVATION_SUCCESS:
      window.localStorage.setItem('currentUser', action.user.email)
      window.localStorage.setItem('token', action.user.token)
      window.location.href = '/home'
      return state
    case USER_REGISTER_SUCCESS:
      window.location.href = `/register?token=${action.user.token}`
      return state
        .set('currentUser', action.user.email)
        .set('token', action.user.token)
    case ADD_TOPIC:
      return state
        .setIn(['userData', 'repositories'], [...state.getIn(['userData', 'repositories']), action.topic.code])
    case ADD_TOPIC_SUCCESS:
      return state
        .setIn(['userData', 'subscriptions'], state.getIn(['userData', 'subscriptions']).map(item => {
          if (item.code === action.topic.code) {
            return Object.assign({}, item, {is_subscribed: true})
          } else {
            return item
          }
        }))
        .setIn(['channels'], state.getIn(['channels']).map(item => {
          if (item.code === action.topic.code) {
            return Object.assign({}, item, {is_subscribed: true})
          } else {
            return item
          }
        }))
    case REMOVE_TOPIC:
      return state
        .setIn(['userData', 'subscriptions'], state.getIn(['userData', 'subscriptions']))
    case REMOVE_TOPIC_SUCCESS:
      return state
        .setIn(['userData', 'subscriptions'], state.getIn(['userData', 'subscriptions']).map(item => {
          if (item.code === action.topic.code) {
            return Object.assign({}, item, {is_subscribed: false})
          } else {
            return item
          }
        }))
    case UPDATE_GROUPBY_SUCCESS:
      return state
        .setIn(['userData', 'groupBy'], action.groupBy)
    case UPDATE_TIMEZONE_SUCCESS:
      return state
        .setIn(['userData', 'timezone'], action.timezone)
    case ADD_HOUR:
      if (!state.getIn(['userData', 'hours']).includes(action.hour)) {
        return state
          .setIn(['userData', 'hours'], [...state.getIn(['userData', 'hours']), action.hour].sort((a, b) => strToMin(a) - strToMin(b)))
      }
      return state
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
    case LOAD_FEEDS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['channels'], false)
    case LOAD_FEEDS_SUCCESS:
      let all = []
      action.repos.map(channel => {
        channel.sections.map(section => all.push({
          code: `${channel.code}_${section.code}`,
          name: `${channel.name} / ${section.name}`,
          channelName: channel.name,
          sectionName: section.name,
          description: section.description,
          facebook_id: channel.facebook_id,
          twitter_id: channel.twitter_id,
          url: section.url,
          icon: channel.icon,
          language: channel.language.toUpperCase(),
          is_subscribed: false
        }))
      })
      return state
        .setIn(['channels'], all)
        .set('loading', false)
    case LOAD_FEEDS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case LOAD_USER_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false)
    case LOAD_USER_DATA_SUCCESS:
      let allSubscriptions = []
      action.data.subscriptions.map(item => {
        allSubscriptions.push({
          code: `${item.channel.code}_${item.topic.code}`,
          name: `${item.channel.name} / ${item.topic.name}`,
          channelName: item.channel.name,
          sectionName: item.topic.name,
          description: item.topic.description,
          url: item.topic.url,
          facebook_id: item.channel.facebook_id,
          twitter_id: item.channel.twitter_id,
          icon: item.channel.icon,
          language: item.channel.language.toUpperCase(),
          is_subscribed: true
        })
      })
      return state
        .setIn(['userData', 'subscriptions'], allSubscriptions)
        .setIn(['userData', 'repositories'], action.data.repos)
        .setIn(['userData', 'language'], action.data.language)
        .setIn(['userData', 'email'], action.data.email)
        .setIn(['userData', 'days'], action.data.days)
        .setIn(['userData', 'hours'], action.data.hours)
        .setIn(['userData', 'nextAt'], action.data.nextAt)
        .setIn(['userData', 'timezone'], action.data.timezone)
        .setIn(['userData', 'groupBy'], action.data.groupBy)
        .setIn(['userData', 'confirmed_at'], action.data.confirmed_at)
        .set('loading', false)
        .set('currentUser', action.data.username)
    case LOAD_USER_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default appReducer
