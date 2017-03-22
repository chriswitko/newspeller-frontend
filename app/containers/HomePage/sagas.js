import {
  take,
  call,
  put,
  select,
  cancel,
  takeLatest,
  takeEvery
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
  USER_AUTHORIZE,
  UPDATE_TIMEZONE,
  REMOVE_ACCOUNT,
  CHANGE_LOCALE,
  USER_REGISTER,
  USER_SEND_ACTIVATION,
  RESET_PASSWORD,
  SAVE_PASSWORD,
  CHANGE_LANGUAGE
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
  authorizeError,
  updateTimezoneSuccess,
  removeAccountSuccess,
  changeLocaleSuccess,
  registerSuccess,
  sendActivationEmailSuccess,
  resetPasswordSuccess,
  savePasswordSuccess,
  changeUserLanguageSuccess
} from 'containers/App/actions'
import request from 'utils/request'
import {
  makeSelectUsername,
  makeSelectToken
} from 'containers/HomePage/selectors'

const API_ENDPOINT = process.env.NODE_ENV === 'development' ? window.location.origin.replace(':3000', ':3100') : 'https://api.newspeller.com'

/**
 * Github repos request/response handler
 */
export function * getRepos () {
  const token = yield select(makeSelectToken())
  const username = yield select(makeSelectUsername())
  const requestURL = `${API_ENDPOINT}/subscriptions?token=${token}`

  try {
    const repos = yield call(request, requestURL)
    yield put(reposLoaded({
      repos: repos.subscription.sources,
      subscriptions: repos.subscription.channels,
      timezone: repos.subscription.timezone,
      language: repos.subscriber.default_language,
      groupBy: repos.subscription.group_by,
      days: repos.subscription.days,
      hours: repos.subscription.hours,
      nextAt: repos.subscription.next_at,
      username: username,
      confirmed_at: repos.subscriber.confirmed_at,
      activated_at: repos.subscriber.activated_at
    }))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * removeTopicRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/remove_topic/${action.name.code}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(removeTopicSuccess(action.name))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * addTopicRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/add_topic/${action.topic.code}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(addTopicSuccess(action.topic))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * removeHourRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/remove_hour/${action.hour}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(removeHourSuccess(action.hour))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * removeDayRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/remove_day/${action.day}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(removeDaySuccess(action.day))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * addDayRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/add_day/${action.day}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(addDaySuccess(action.day))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * addHourRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/add_hour/${action.hour}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(addHourSuccess(action.hour))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * updateTimezoneRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/update_timezone?timezone=${action.timezone}&token=${token}`

  try {
    yield call(request, requestURL)
    yield put(updateTimezoneSuccess(action.timezone))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * updateLocaleRemotely (action) {
  const token = yield select(makeSelectToken())
  if (!token) {
    yield put(repoLoadingError('No token'))
  }
  const requestURL = `${API_ENDPOINT}/subscribers/update_language?locale=${action.locale}&token=${token}`

  try {
    yield call(request, requestURL)
    yield put(changeLocaleSuccess())
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * updateLanguageRemotely (action) {
  const token = yield select(makeSelectToken())
  if (!token) {
    yield put(repoLoadingError('No token'))
  }
  const requestURL = `${API_ENDPOINT}/subscribers/update_language?locale=${action.locale}&token=${token}`

  try {
    yield call(request, requestURL)
    yield put(changeUserLanguageSuccess())
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

export function * removeAccountRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscribers`

  try {
    yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token
      })
    })
    yield put(removeAccountSuccess())
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function * githubData () {
  const watcher = yield takeLatest(LOAD_REPOS, getRepos)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * removeHourSaga () {
  const watcher = yield takeEvery(REMOVE_HOUR, removeHourRemotely)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * removeTopicSaga () {
  yield takeEvery(REMOVE_TOPIC, removeTopicRemotely)
}

export function * removeDaySaga () {
  const watcher = yield takeEvery(REMOVE_DAY, removeDayRemotely)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * addDaySaga () {
  const watcher = yield takeEvery(ADD_DAY, addDayRemotely)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * addTopicSaga () {
  yield takeEvery(ADD_TOPIC, addTopicRemotely)
}

export function * addHourSaga () {
  const watcher = yield takeEvery(ADD_HOUR, addHourRemotely)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * updateTimezoneSaga () {
  yield takeLatest(UPDATE_TIMEZONE, updateTimezoneRemotely)
}

export function * updateLocaleSaga () {
  yield takeLatest(CHANGE_LOCALE, updateLocaleRemotely)
}

export function * updateUserLanguageSaga () {
  yield takeLatest(CHANGE_LANGUAGE, updateLanguageRemotely)
}

export function * removeAccountSaga () {
  yield takeLatest(REMOVE_ACCOUNT, removeAccountRemotely)
}

export function * getFeeds (action) {
  const { language = 'all' } = action.args
  const requestURL = `${API_ENDPOINT}/feeds/all?language=${language}`

  try {
    const repos = yield call(request, requestURL)
    yield put(feedsLoaded(repos))
  } catch (err) {
    yield put(feedLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function * loadFeedsData (action) {
  yield takeLatest(LOAD_FEEDS, (action) => getFeeds(action))

  // yield take(LOCATION_CHANGE)
  // yield cancel(watcher)
}

export function * getUser (action) {
  const requestURL = `${API_ENDPOINT}/subscribers/auth`

  try {
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
    yield put(authorizeSuccess(user))
  } catch (err) {
    yield put(authorizeError(err))
  }
}

export function * fetchUserRegister (action) {
  const requestURL = `${API_ENDPOINT}/subscribers/new`

  try {
    const user = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: action.email
      })
    })
    yield put(registerSuccess(user))
  } catch (err) {
    yield put(authorizeError(err))
  }
}

export function * fetchUserActivation (action) {
  const requestURL = `${API_ENDPOINT}/subscribers/activation`

  try {
    const user = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: action.user.token,
        email: action.user.email,
        password: action.user.password,
        timezone: action.user.timezone,
        locale: action.user.locale
      })
    })
    yield put(sendActivationEmailSuccess(user))
  } catch (err) {
    yield put(authorizeError(err))
  }
}

export function * fetchPasswordReset (action) {
  const requestURL = `${API_ENDPOINT}/subscribers/reset_password`

  try {
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: action.email
      })
    })
    yield put(resetPasswordSuccess())
  } catch (err) {
    yield put(authorizeError(err))
  }
}

export function * fetchSavePassword (action) {
  const requestURL = `${API_ENDPOINT}/subscribers/update_password`

  try {
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: action.token,
        password: action.password
      })
    })
    yield put(savePasswordSuccess())
  } catch (err) {
    yield put(authorizeError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function * authorizeUser () {
  const watcher = yield takeLatest(USER_AUTHORIZE, getUser)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * registerUserSaga () {
  const watcher = yield takeLatest(USER_REGISTER, fetchUserRegister)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * sendActivationSaga () {
  const watcher = yield takeLatest(USER_SEND_ACTIVATION, fetchUserActivation)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * resetPasswordSaga () {
  const watcher = yield takeLatest(RESET_PASSWORD, fetchPasswordReset)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * savePasswordSaga () {
  const watcher = yield takeLatest(SAVE_PASSWORD, fetchSavePassword)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default [
  loadFeedsData,
  githubData,
  removeHourSaga,
  removeDaySaga,
  addDaySaga,
  addHourSaga,
  removeTopicSaga,
  addTopicSaga,
  authorizeUser,
  updateTimezoneSaga,
  removeAccountSaga,
  // updateLocaleSaga,
  registerUserSaga,
  sendActivationSaga,
  resetPasswordSaga,
  savePasswordSaga,
  updateUserLanguageSaga
]
