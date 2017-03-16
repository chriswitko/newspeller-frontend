import React, { PropTypes } from 'react'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'

import styled from 'styled-components'
import Ionicon from 'react-ionicons'

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    display: inline-table;
    padding-right: 5px;
    margin-bottom: 5px;
    vertical-align: middle;

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
      
      &:active {
        background: #2f8d59;
        color: #FFF;
      }

      span {
        font-weight: 100;
      }
    }
  }
`

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
        <Ul>
          {hours.map((hour, index) => (
            <li
              key={index}
            >
              <button href='#' onClick={() => onRemoveHour(hour)}>{hour}&nbsp;<Ionicon icon='ion-ios-trash-outline' fontSize='19px' color='red' /></button>
            </li>
          ))}
        </Ul>
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
