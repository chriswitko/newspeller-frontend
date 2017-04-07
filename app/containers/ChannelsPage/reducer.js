import { fromJS } from 'immutable'

import {
  ADD_TOPIC,
  ADD_TOPIC_SUCCESS,
  REMOVE_TOPIC,
  REMOVE_TOPIC_SUCCESS,
  LOAD_FEEDS,
  LOAD_FEEDS_SUCCESS,
  LOAD_FEEDS_ERROR,
  USER_RESEND_ACTIVATION_SUCCESS,
  FILTER_CHANNELS,
  ACCEPT_CUSTOM_SCHEDULE_SUCCESS
} from './constants'

const initialState = fromJS({
  selectedCategory: 'news',
  displayedChannels: [],
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
  confirmedAt: false,
  hasCustomSchedule: false
})

// const filterChannels = (channels = [], code = 'news') => {
//   return channels.filter(c => c.sectionCategory === code)
// }

const localReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCEPT_CUSTOM_SCHEDULE_SUCCESS:
      return state
        .set('hasCustomSchedule', true)
    case FILTER_CHANNELS:
      return state
        .set('selectedCategory', action.code)
        .setIn(['displayedChannels'], state.getIn(['channels']).filter(c => c.sectionCategory === action.code))
    case USER_RESEND_ACTIVATION_SUCCESS:
      return state
        .set('resent', true)
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
          sectionCategory: section.category,
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
        .setIn(['displayedChannels'], all.filter(c => c.sectionCategory === state.get('selectedCategory')))
        .set('confirmedAt', action.data.subscriptions.confirmed_at)
        .set('hasCustomSchedule', action.data.subscriptions.has_custom_schedule)
        .set('loading', false)
    case LOAD_FEEDS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case ADD_TOPIC:
    case ADD_TOPIC_SUCCESS:
      return state
        .setIn(['displayedChannels'], state.getIn(['displayedChannels']).map(item => {
          if (item.code === action.topic.code) {
            return Object.assign({}, item, {is_subscribed: true})
          } else {
            return item
          }
        }))
    case REMOVE_TOPIC:
    case REMOVE_TOPIC_SUCCESS:
      return state
        .setIn(['displayedChannels'], state.getIn(['displayedChannels']).map(item => {
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
