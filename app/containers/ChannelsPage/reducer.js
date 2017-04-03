import { fromJS } from 'immutable'

import {
  ADD_TOPIC_SUCCESS,
  REMOVE_TOPIC_SUCCESS,
  LOAD_FEEDS,
  LOAD_FEEDS_SUCCESS,
  LOAD_FEEDS_ERROR
} from './constants'

const initialState = fromJS({
  resent: false,
  reset: false,
  loading: false,
  error: false,
  currentUser: false,
  token: false,
  channels: [],
  language: 'en',
  nextAt: '',
  timezone: 'Europe/London',
  email: '',
  groupBy: 'channels',
  subscriptions: false,
  days: false,
  hours: false,
  confirmedAt: false
})

function localReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_FEEDS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['channels'], false)
    case LOAD_FEEDS_SUCCESS:
      let all = []
      action.data.channels.map(channel => {
        channel.sections.map(section => all.push({
          code: `${channel.code}_${section.code}`,
          name: `${channel.name} / ${section.name}`,
          channelCode: channel.code,
          channelName: channel.name,
          sectionName: section.name,
          description: section.description,
          facebook_id: channel.facebook_id,
          twitter_id: channel.twitter_id,
          url: section.url,
          icon: channel.icon,
          language: channel.language.toUpperCase(),
          is_subscribed: section.is_subscribed
        }))
      })
      return state
        .setIn(['channels'], all)
        .set('confirmedAt', action.data.subscriptions.confirmed_at)
        .set('loading', false)
    case LOAD_FEEDS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case ADD_TOPIC_SUCCESS:
      return state
        .setIn(['channels'], state.getIn(['channels']).map(item => {
          if (item.code === action.topic.code) {
            return Object.assign({}, item, {is_subscribed: true})
          } else {
            return item
          }
        }))
    case REMOVE_TOPIC_SUCCESS:
      return state
        .setIn(['channels'], state.getIn(['channels']).map(item => {
          if (item.code === action.topic.code) {
            return Object.assign({}, item, {is_subscribed: false})
          } else {
            return item
          }
        }))
    default:
      return state
  }
}

export default localReducer
