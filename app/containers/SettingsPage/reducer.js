import { fromJS } from 'immutable'

import {
  CHANGE_LANGUAGE_SUCCESS,
  REMOVE_ACCOUNT_SUCCESS,
  UPDATE_TIMEZONE_SUCCESS,
  ADD_HOUR,
  ADD_HOUR_SUCCESS,
  ADD_DAY_SUCCESS,
  REMOVE_HOUR_SUCCESS,
  REMOVE_HOUR,
  ADD_DAY,
  REMOVE_DAY,
  LOAD_USER_DATA,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_ERROR
 } from './constants'

const initialState = fromJS({
  resent: false,
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

function localReducer (state = initialState, action) {
  switch (action.type) {
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
          is_subscribed: item.topic.is_subscribed
        })
      })
      return state
        .setIn(['userData', 'subscriptions'], allSubscriptions)
        .setIn(['userData', 'language'], action.data.language)
        .setIn(['userData', 'email'], action.data.email)
        .setIn(['userData', 'days'], action.data.days)
        .setIn(['userData', 'hours'], action.data.hours)
        .setIn(['userData', 'nextAt'], action.data.nextAt)
        .setIn(['userData', 'timezone'], action.data.timezone)
        .setIn(['userData', 'confirmed_at'], action.data.confirmed_at)
        .set('loading', false)
        .set('currentUser', action.data.username)
    case LOAD_USER_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
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
    case UPDATE_TIMEZONE_SUCCESS:
      return state
        .setIn(['userData', 'timezone'], action.timezone)
    case CHANGE_LANGUAGE_SUCCESS:
      return state
        .setIn(['userData', 'language'], action.locale)
    case REMOVE_ACCOUNT_SUCCESS:
      window.localStorage.setItem('currentUser', '')
      window.localStorage.setItem('token', '')
      window.location.href = '/signin'
      return state
        .set('token', false)
    default:
      return state
  }
}

export default localReducer
