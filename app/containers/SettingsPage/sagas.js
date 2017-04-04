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
  ADD_HOUR,
  REMOVE_DAY,
  ADD_DAY,
  REMOVE_HOUR,
  UPDATE_TIMEZONE,
  REMOVE_ACCOUNT,
  CHANGE_LANGUAGE,
  LOAD_USER_DATA
} from './constants'
import {
  removeHourSuccess,
  removeHourError,
  removeDaySuccess,
  removeDayError,
  addDaySuccess,
  addDayError,
  addHourSuccess,
  addHourError,
  updateTimezoneSuccess,
  updateTimezoneError,
  removeAccountSuccess,
  removeAccountError,
  changeUserLanguageSuccess,
  changeUserLanguageError,
  userLoaded,
  userError
} from './actions'
import {
  makeSelectToken
} from 'containers/App/selectors'
import request, {API_ENDPOINT} from 'utils/request'

export function * removeHourRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/remove_hour/${action.hour}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(removeHourSuccess(action.hour))
  } catch (err) {
    yield put(removeHourError(err))
  }
}

export function * removeDayRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/remove_day/${action.day}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(removeDaySuccess(action.day))
  } catch (err) {
    yield put(removeDayError(err))
  }
}

export function * addDayRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/add_day/${action.day}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(addDaySuccess(action.day))
  } catch (err) {
    yield put(addDayError(err))
  }
}

export function * addHourRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/add_hour/${action.hour}?token=${token}`

  try {
    yield call(request, requestURL)
    yield put(addHourSuccess(action.hour))
  } catch (err) {
    yield put(addHourError(err))
  }
}

export function * updateTimezoneRemotely (action) {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions/update_timezone?timezone=${action.timezone}&token=${token}`

  try {
    yield call(request, requestURL)
    yield put(updateTimezoneSuccess(action.timezone))
  } catch (err) {
    yield put(updateTimezoneError(err))
  }
}

export function * updateLanguageRemotely (action) {
  const token = yield select(makeSelectToken())
  if (!token) {
    yield put(changeUserLanguageError('No token'))
  }
  const requestURL = `${API_ENDPOINT}/subscribers/update_language?locale=${action.locale}&token=${token}`

  try {
    yield call(request, requestURL)
    yield put(changeUserLanguageSuccess())
  } catch (err) {
    yield put(changeUserLanguageError(err))
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
    yield put(removeAccountError(err))
  }
}

export function * getUserDataRemotely () {
  const token = yield select(makeSelectToken())
  const requestURL = `${API_ENDPOINT}/subscriptions?token=${token}`

  try {
    const repos = yield call(request, requestURL)
    yield put(userLoaded({
      subscriptions: repos.subscription.channels,
      timezone: repos.subscription.timezone,
      language: repos.subscriber.default_language,
      days: repos.subscription.days,
      hours: repos.subscription.hours,
      nextAt: repos.subscription.next_at,
      confirmed_at: repos.subscriber.confirmed_at,
      activated_at: repos.subscriber.activated_at
    }))
  } catch (err) {
    yield put(userError(err))
  }
}

export function * removeHourSaga () {
  const watcher = yield takeEvery(REMOVE_HOUR, removeHourRemotely)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
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

export function * addHourSaga () {
  const watcher = yield takeEvery(ADD_HOUR, addHourRemotely)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export function * updateTimezoneSaga () {
  yield takeLatest(UPDATE_TIMEZONE, updateTimezoneRemotely)
}

export function * updateUserLanguageSaga () {
  yield takeLatest(CHANGE_LANGUAGE, updateLanguageRemotely)
}

export function * removeAccountSaga () {
  yield takeLatest(REMOVE_ACCOUNT, removeAccountRemotely)
}

export function * loadUserDataSaga () {
  const watcher = yield takeLatest(LOAD_USER_DATA, getUserDataRemotely)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default [
  loadUserDataSaga,
  removeAccountSaga,
  updateUserLanguageSaga,
  updateTimezoneSaga,
  addHourSaga,
  addDaySaga,
  removeDaySaga,
  removeHourSaga
]
