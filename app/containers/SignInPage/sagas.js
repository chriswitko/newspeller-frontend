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
  USER_AUTHORIZE
} from './constants'
import {
  authorizeSuccess,
  authorizeError
} from './actions'
import request, {API_ENDPOINT} from 'utils/request'

export function * fetchAuthorizeUser (action) {
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

export function * authorizeUser () {
  const watcher = yield takeLatest(USER_AUTHORIZE, fetchAuthorizeUser)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default [
  authorizeUser
]
