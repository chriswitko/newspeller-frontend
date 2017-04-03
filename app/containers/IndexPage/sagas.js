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
  USER_REGISTER
} from './constants'
import {
  registerSuccess,
  registerError
} from './actions'
import request, {API_ENDPOINT} from 'utils/request'

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
    yield put(registerError(err))
  }
}

export function * registerUserSaga () {
  const watcher = yield takeLatest(USER_REGISTER, fetchUserRegister)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default [
  registerUserSaga
]
