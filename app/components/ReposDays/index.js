import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'

function ReposDays ({ loading, error, days, onRemoveDay, onAddDay }) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    )
    return <List component={ErrorComponent} />
  }

  if (days !== false) {
    return (
      <div>
        <ul>
          {daysOfWeek.map((day, index) => (
            <li
              key={index}
            >
              <span style={{'fontWeight': ~days.indexOf(index + 1) ? 'bold' : ''}}>{day}</span>
              &nbsp;
              { ~days.indexOf(index + 1) ? <a href='#' onClick={() => onRemoveDay(index + 1)}>Remove</a> : <a href='#' onClick={() => onAddDay(index + 1)}>Add</a> }
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}

ReposDays.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  days: PropTypes.any,
  onRemoveDay: PropTypes.func,
  onAddDay: PropTypes.func
}

export default ReposDays
