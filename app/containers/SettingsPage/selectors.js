/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'

const selectSchedule = (state) => state.get('schedule')

const makeSelectUsername = () => createSelector(
  selectSchedule,
  (scheduleState) => scheduleState ? scheduleState.get('username') : 'chris.witko@me.com'
)

const makeSelectHour = () => createSelector(
  selectSchedule,
  (scheduleState) => scheduleState ? scheduleState.get('hour') : 'HH'
)

export {
  selectSchedule,
  makeSelectUsername,
  makeSelectHour
}
