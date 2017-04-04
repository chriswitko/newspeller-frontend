import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('register')

const makeSelectPassword = _ => createSelector(
  selectLocal,
  (localState) => localState.get('password')
)

const makeSelectToken = _ => createSelector(
  selectLocal,
  (localState) => localState.get('token')
)

const makeSelectTimezone = _ => createSelector(
  selectLocal,
  (localState) => localState.get('timezone')
)

const makeSelectLocale = _ => createSelector(
  selectLocal,
  (localState) => localState.get('language')
)

const makeSelectLoading = _ => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = _ => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

export {
  makeSelectTimezone,
  makeSelectLocale,
  makeSelectPassword,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError
}
