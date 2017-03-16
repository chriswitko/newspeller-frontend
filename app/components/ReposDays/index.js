import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'

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

    button {
      display: inline-flex;
      padding: 0.4em 1.3em;
      min-width: 60px;
      text-decoration: none;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      outline: 0;
      font-weight: bold;
      font-size: 14px;
      border-bottom: 3px solid rgba(0, 0, 0, 0.14902);
      background-color: white;
      color: black;
      border-top: 1px solid rgba(0, 0, 0, 0.14902);
      border-left: 1px solid rgba(0, 0, 0, 0.14902);
      border-right: 1px solid rgba(0, 0, 0, 0.14902);
      
      &.active {
        background-color: #3cb371;
        color: white;
      }

      &:active {
        background: #2f8d59;
        color: #FFF;
      }
    }
  }
`

function ReposDays ({ loading, error, days, onRemoveDay, onAddDay }) {
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

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
              { ~days.indexOf(index + 1) ? <button className='active' href='#' onClick={() => onRemoveDay(index + 1)}><span style={{'fontWeight': ~days.indexOf(index + 1) ? 'bold' : ''}}>{day}</span></button> : <button href='#' onClick={() => onAddDay(index + 1)}><span style={{'fontWeight': ~days.indexOf(index + 1) ? 'bold' : ''}}>{day}</span></button> }
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

export default ReposDays
