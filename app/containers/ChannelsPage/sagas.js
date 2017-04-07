import {
  take,
  call,
  put,
  cancel,
  takeLatest,
  select,
  takeEvery
} from 'redux-saga/effects'
import {
  LOCATION_CHANGE
} from 'react-router-redux'
import {
  USER_RESEND_ACTIVATION,
  ADD_TOPIC,
  REMOVE_TOPIC,
  LOAD_FEEDS,
  ACCEPT_CUSTOM_SCHEDULE
} from './constants'
import {
  resendActivationEmailSuccess,
  resendActivationEmailError,
  removeTopicSuccess,
  removeTopicError,
  addTopicSuccess,
  addTopicError,
  feedsLoaded,
  feedLoadingError,
  acceptCustomScheduleSuccess,
  acceptCustomScheduleError
} from './actions'
import {
  makeSelectToken
} from 'containers/App/selectors'
import request, {API_ENDPOINT} from 'utils/request'

export function * fetchUserReActivation (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscribers/resendActivationEmail`

  try {
    const user = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token
      })
    })
    yield put(resendActivationEmailSuccess(user))
  } catch (err) {
    yield put(resendActivationEmailError(err))
  }
}

export function * removeTopicRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/remove_topic/${action.topic.code}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(removeTopicSuccess(action.topic))
  } catch (err) {
    yield put(removeTopicError(err))
  }
}

export function * addTopicRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/add_topic/${action.topic.code}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(addTopicSuccess(action.topic))
  } catch (err) {
    yield put(addTopicError(err))
  }
}

export function * acceptCustomSchedule (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/update_custom_schedule?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(acceptCustomScheduleSuccess())
  } catch (err) {
    yield put(acceptCustomScheduleError(err))
  }
}

export function * getFeeds (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/feeds/all?token=${token}` // ?language=${language}

  try {
    const data = yield call(request, requestURL)
    yield put(feedsLoaded(data))
  } catch (err) {
    yield put(feedLoadingError(err))
  }
}

export function * loadFeedsDataSaga (action) {
  yield takeLatest(LOAD_FEEDS, (action) => getFeeds(action))
}

export function * removeTopicSaga () {
  yield takeEvery(REMOVE_TOPIC, removeTopicRemotely)
}

export function * addTopicSaga () {
  yield takeEvery(ADD_TOPIC, addTopicRemotely)
}

export function * acceptCustomScheduleSaga () {
  yield takeEvery(ACCEPT_CUSTOM_SCHEDULE, acceptCustomSchedule)
}

export function * resendActivationSaga () {
  const watcher = yield takeLatest(USER_RESEND_ACTIVATION, fetchUserReActivation)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default [
  acceptCustomScheduleSaga,
  removeTopicSaga,
  addTopicSaga,
  loadFeedsDataSaga,
  resendActivationSaga
]
