import React from 'react'
import PropTypes from 'prop-types'

import List from 'components/List'
import ListItem from 'components/ListItem'
import LoadingIndicator from 'components/LoadingIndicator'

import styled from 'styled-components'
import Ionicon from 'react-ionicons'
import ButtonSubmit from 'components/ButtonSubmit'

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
  }
`

const ReposHours = ({ loading, error, hours, onRemoveHour }) => {
  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = _ => (
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
              <ButtonSubmit color='#a8a8a8' minWidth='125px' href='#' onClick={() => onRemoveHour(hour)}>{hour}&nbsp;<Ionicon icon='ion-ios-trash-outline' fontSize='19px' color='red' /></ButtonSubmit>
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
