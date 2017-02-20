/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_FEEDS } from 'containers/App/constants'
import { feedsLoaded, feedLoadingError } from 'containers/App/actions'

import request from 'utils/request'

/**
 * Github repos request/response handler
 */
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

// Bootstrap sagas
export default [
  loadFeedsData
]
