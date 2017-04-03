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
  USER_SEND_ACTIVATION
} from './constants'
import {
  sendActivationEmailSuccess,
  sendActivationEmailError
} from './actions'
import request, {API_ENDPOINT} from 'utils/request'

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
    yield put(sendActivationEmailError(err))
  }
}

export function * sendActivationSaga () {
  const watcher = yield takeLatest(USER_SEND_ACTIVATION, fetchUserActivation)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default [
  sendActivationSaga
]
