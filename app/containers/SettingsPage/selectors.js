/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectLocal = (state) => state.get('settings')

const makeSelectUsername = _ => createSelector(
  selectLocal,
  (localState) => localState ? localState.get('username') : 'chris.witko@me.com'
)

const makeSelectHour = _ => createSelector(
  selectLocal,
  (localState) => localState ? localState.get('hour') : 'HH'
)

const makeSelectMinute = _ => createSelector(
  selectLocal,
  (localState) => localState ? localState.get('minute') : 'MM'
)

const makeSelectLoading = _ => createSelector(
  selectLocal,
  (localState) => localState.get('loading')
)

const makeSelectError = _ => createSelector(
  selectLocal,
  (localState) => localState.get('error')
)

const makeSelectDays = _ => createSelector(
  selectLocal,
  (localState) => localState.getIn(['userData', 'days'])
)

const makeSelectHours = _ => createSelector(
  selectLocal,
  (localState) => localState.getIn(['userData', 'hours'])
)

const makeSelectTimezone = _ => createSelector(
  selectLocal,
  (localState) => localState.getIn(['userData', 'timezone'])
)

const makeSelectLanguage = _ => createSelector(
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
