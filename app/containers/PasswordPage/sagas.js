import {
  take,
  call,
  put,
  cancel,
  takeLatest
} from 'redux-saga/effects'
import {
  LOCATION_CHANGE
} from 'react-router-redux'
import {
  RESET_PASSWORD,
  SAVE_PASSWORD
} from './constants'
import {
  resetPasswordSuccess,
  savePasswordSuccess,
  reportError
} from './actions'
import request, {API_ENDPOINT} from 'utils/request'

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
    yield put(reportError('errorEmailNotExists'))
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
    yield put(reportError('errorGeneralError'))
  }
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
  resetPasswordSaga,
  savePasswordSaga
]
