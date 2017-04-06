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
  LOAD_FEEDS_ERROR,
  FILTER_CHANNELS
} from './constants'

export const filterChannels = code => {
  return {
    type: FILTER_CHANNELS,
    code
  }
}

export const resendActivationEmail = (user) => {
  return {
    type: USER_RESEND_ACTIVATION,
    user
  }
}

export const resendActivationEmailSuccess = (user) => {
  return {
    type: USER_RESEND_ACTIVATION_SUCCESS,
    user
  }
}

export const resendActivationEmailError = (user) => {
  return {
    type: USER_RESEND_ACTIVATION_ERROR,
    user
  }
}

export const addTopic = (topic) => {
  return {
    type: ADD_TOPIC,
    topic
  }
}

export const addTopicSuccess = (topic) => {
  return {
    type: ADD_TOPIC_SUCCESS,
    topic
  }
}

export const addTopicError = (err) => {
  return {
    type: ADD_TOPIC_ERROR,
    err
  }
}

export const removeTopic = (topic) => {
  return {
    type: REMOVE_TOPIC,
    topic
  }
}

export const removeTopicSuccess = (topic) => {
  return {
    type: REMOVE_TOPIC_SUCCESS,
    topic
  }
}

export const removeTopicError = (err) => {
  return {
    type: REMOVE_TOPIC_ERROR,
    err
  }
}

export const loadUserData = _ => {
  return {
    type: LOAD_USER_DATA
  }
}

export const reposLoaded = (data) => {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    data
  }
}

export const repoLoadingError = (error) => {
  return {
    type: LOAD_USER_DATA_ERROR,
    error
  }
}

export const loadFeeds = (args = {}) => {
  return {
    type: LOAD_FEEDS,
    args
  }
}

export const feedsLoaded = (data) => {
  return {
    type: LOAD_FEEDS_SUCCESS,
    data
  }
}

export const feedLoadingError = (error) => {
  return {
    type: LOAD_FEEDS_ERROR,
    error
  }
}
