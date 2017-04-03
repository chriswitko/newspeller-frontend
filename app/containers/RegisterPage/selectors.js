import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('register')

const makeSelectPassword = () => createSelector(
  selectLocal,
  (localState) => localState.get('password')
)

const makeSelectToken = () => createSelector(
  selectLocal,
  (localState) => localState.get('token')
)

const makeSelectTimezone = () => createSelector(
  selectLocal,
  (localState) => localState.get('timezone')
)

const makeSelectLocale = () => createSelector(
  selectLocal,
  (localState) => localState.get('language')
)

const makeSelectLoading = () => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = () => createSelector(
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
