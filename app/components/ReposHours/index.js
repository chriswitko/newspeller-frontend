import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'

function ReposHours ({ loading, error, hours, onRemoveHour }) {
  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    )
    return <List component={ErrorComponent} />
  }

  if (hours !== false) {
    return (
      <div>
        <ul>
          {hours.map(hour => (
            <li
              key={hour}
            >
              {hour}
              &nbsp;
              <a href='#' onClick={() => onRemoveHour(hour)}>Remove</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}

ReposHours.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  hours: PropTypes.any,
  onRemoveHour: PropTypes.func
}


export default ReposHours
