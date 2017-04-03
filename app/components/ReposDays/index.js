import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'
import { injectIntl } from 'react-intl'
import messages from './messages'

import ButtonSubmit from 'components/ButtonSubmit'

import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    display: inline-table;
    padding-right: 5px;
    margin-bottom: 5px;

    &:last-child {
      padding-right: 0;
    }
  }
`

function ReposDays ({ loading, error, days, onRemoveDay, onAddDay, intl }) {
  const daysOfWeek = [
    intl.formatMessage(messages.shortMonday),
    intl.formatMessage(messages.shortTuesday),
    intl.formatMessage(messages.shortWednesday),
    intl.formatMessage(messages.shortThursday),
    intl.formatMessage(messages.shortFriday),
    intl.formatMessage(messages.shortSaturday),
    intl.formatMessage(messages.shortSunday)
  ]

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
        <Ul>
          {daysOfWeek.map((day, index) => (
            <li
              key={index}
            >
              { ~days.indexOf(index + 1) ? <ButtonSubmit color='#fb6754' minWidth='80px' href='#' onClick={() => onRemoveDay(index + 1)}><span style={{'fontWeight': ~days.indexOf(index + 1) ? 'bold' : ''}}>{day}</span></ButtonSubmit> : <ButtonSubmit color='#a8a8a8' minWidth='80px' href='#' onClick={() => onAddDay(index + 1)}><span style={{'fontWeight': ~days.indexOf(index + 1) ? 'bold' : ''}}>{day}</span></ButtonSubmit> }
            </li>
          ))}
        </Ul>
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

export default injectIntl(ReposDays)
