/**
 * Gets the repositories of the user from Github
 */

import {
  take,
  call,
  put,
  select,
  cancel,
  takeLatest
} from 'redux-saga/effects'
import {
  LOCATION_CHANGE
} from 'react-router-redux'
import {
  LOAD_REPOS,
  REMOVE_TOPIC,
  REMOVE_HOUR,
  REMOVE_DAY,
  ADD_TOPIC,
  ADD_DAY,
  ADD_HOUR,
  LOAD_FEEDS,
  USER_AUTHORIZE
} from 'containers/App/constants'
import {
  reposLoaded,
  repoLoadingError,
  removeTopicSuccess,
  removeHourSuccess,
  removeDaySuccess,
  addTopicSuccess,
  addDaySuccess,
  addHourSuccess,
  feedsLoaded,
  feedLoadingError,
  authorizeSuccess,
  authorizeError
} from 'containers/App/actions'
import request from 'utils/request'
import {
  makeSelectUsername,
  makeSelectToken
} from 'containers/HomePage/selectors'

/**
 * Github repos request/response handler
 */
export function* getRepos () {
  // Select username from store
  const token = yield select(makeSelectToken())
  const username = yield select(makeSelectUsername())
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  const requestURL = `http://localhost:3100/subscriptions?token=${token}`

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL)
    yield put(reposLoaded(repos.subscription.sources, repos.subscription.days, repos.subscription.hours, repos.subscription.next_at, username))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function* removeTopicRemotely (action) {
  // Select username from store
  const token = yield select(makeSelectToken())
  const requestURL = `http://localhost:3100/subscriptions/remove_topic/${action.name}?token=${token}`

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL)
    yield put(removeTopicSuccess(action.topic))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function* removeHourRemotely (action) {
  // Select username from store
  const token = yield select(makeSelectToken())
  // Select username from store
  const requestURL = `http://localhost:3100/subscriptions/remove_hour/${action.hour}?token=${token}`

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL)
    yield put(removeHourSuccess(action.hour))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function* removeDayRemotely (action) {
  // Select username from store
  const token = yield select(makeSelectToken())
  const requestURL = `http://localhost:3100/subscriptions/remove_day/${action.day}?token=${token}`

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL)
    yield put(removeDaySuccess(action.day))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function* addDayRemotely (action) {
  // Select username from store
  const token = yield select(makeSelectToken())
  const requestURL = `http://localhost:3100/subscriptions/add_day/${action.day}?token=${token}`

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL)
    yield put(addDaySuccess(action.day))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function* addHourRemotely (action) {
  // Select username from store
  const token = yield select(makeSelectToken())
  const requestURL = `http://localhost:3100/subscriptions/add_hour/${action.hour}?token=${token}`

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL)
    yield put(addHourSuccess(action.hour))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function* addTopicRemotely (action) {
  // Select username from store
  const token = yield select(makeSelectToken())
  const requestURL = `http://localhost:3100/subscriptions/add_topic/${action.topic}?token=${token}`

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL)
    yield put(addTopicSuccess(action.topic))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_REPOS, getRepos)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* removeHourSaga () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(REMOVE_HOUR, removeHourRemotely)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* removeTopicSaga () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(REMOVE_TOPIC, removeTopicRemotely)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* removeDaySaga () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(REMOVE_DAY, removeDayRemotely)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* addDaySaga () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(ADD_DAY, addDayRemotely)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* addTopicSaga () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(ADD_TOPIC, addTopicRemotely)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* addHourSaga () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(ADD_HOUR, addHourRemotely)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* getFeeds () {
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  const requestURL = `http://localhost:3100/feeds/all`

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL)
    yield put(feedsLoaded(repos))
  } catch (err) {
    yield put(feedLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loadFeedsData () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_FEEDS, getFeeds)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function* getUser (action) {
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`
  const requestURL = `http://localhost:3100/subscribers/auth`

  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: action.email,
        password: action.password
      })
    })
    console.log('userdata', user)
    yield put(authorizeSuccess(user))
  } catch (err) {
    yield put(authorizeError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* authorizeUser () {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(USER_AUTHORIZE, getUser)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

// Bootstrap sagas
export default [
  loadFeedsData,
  githubData,
  removeHourSaga,
  removeDaySaga,
  addDaySaga,
  addHourSaga,
  removeTopicSaga,
  addTopicSaga,
  authorizeUser
]
