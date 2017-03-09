import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import defaultTimezones from './timezones.json'
import styled from 'styled-components'
import arrows from './select_up_down_arrow.svg'

const Select = styled.select`
  outline: none;
  color: #283c46;
  background: #fff url(${arrows}) no-repeat right 0.8em center;
  background-size: 0.55em;
  padding-right: 2.6em;
  max-width: 100%;
  width: 100%;
  border-radius: 0.4rem;
  border: 1px solid #bfbfbf;
  transition: box-shadow 0.15s ease-in-out;
  max-width: 100%;
  border-radius: 0.4rem;
  border: 1px solid #bfbfbf;
  padding: 0.7rem;
  background-color: #fff;
  font-family: inherit;
  font-weight: inherit;
  -webkit-appearance: none;
  -moz-appearance: none
`

const propTypes = {
  defaultValue: PropTypes.any,
  initialValue: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

const defaultProps = {
  defaultValue: '',
  initialValue: '',
  placeholder: '',
  onChange: () => {}
}

class TimezonePicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.defaultValue || props.initialValue
    }

    this.prevValue = this.state.value
  }

  componentWillReceiveProps (nextProps) {
    const { value } = nextProps
    if (nextProps.value !== this.props.value) {
      this.setState({ value })
    }
  }

  render () {
    const { value, defaultValue, onChange } = this.props

    return (
      <div>
        <Select
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
        >
          {Object.keys(defaultTimezones).map((tz, index) => {
            return <option key={index} value={defaultTimezones[tz]}>{tz}</option>
          })}
        </Select>
      </div>
    )
  }
}

TimezonePicker.propTypes = propTypes
TimezonePicker.defaultProps = defaultProps

export default TimezonePicker
