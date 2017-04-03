/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('settings')

const makeSelectUsername = () => createSelector(
  selectLocal,
  (localState) => localState ? localState.get('username') : 'chris.witko@me.com'
)

const makeSelectHour = () => createSelector(
  selectLocal,
  (localState) => localState ? localState.get('hour') : 'HH'
)

const makeSelectMinute = () => createSelector(
  selectLocal,
  (localState) => localState ? localState.get('minute') : 'MM'
)

const makeSelectLoading = () => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = () => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

const makeSelectDays = () => createSelector(
  selectLocal,
  (localState) => localState.getIn(['userData', 'days'])
)

const makeSelectHours = () => createSelector(
  selectLocal,
  (localState) => localState.getIn(['userData', 'hours'])
)

const makeSelectTimezone = () => createSelector(
  selectLocal,
  (localState) => localState.getIn(['userData', 'timezone'])
)

const makeSelectLanguage = () => createSelector(
  selectLocal,
  (localState) => localState.getIn(['userData', 'language'])
)

export {
  makeSelectTimezone,
  makeSelectLanguage,
  makeSelectDays,
  makeSelectHours,
  makeSelectUsername,
  makeSelectHour,
  makeSelectMinute,
  makeSelectLoading,
  makeSelectError
}
