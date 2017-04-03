import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import arrows from './select_up_down_arrow.svg'

const Select = styled.select`
  outline: none;
  color: #283c46;
  background: #fff url(${arrows}) no-repeat right 0.8em center;
  background-size: 0.55em;
  max-width: 100%;
  border: 1px solid #a8a8a8;
  transition: box-shadow 0.15s ease-in-out;
  border-radius: 0;
  padding: 0.6rem;
  padding-right: 2.6em;
  margin-right: 1em;
  background-color: #fff;
  display: inline-table;
  float: left;
  font-family: inherit;
  font-weight: inherit;
  -webkit-appearance: none;
  -moz-appearance: none
`

const propTypes = {
  defaultValues: PropTypes.array.isRequired,
  defaultValue: PropTypes.any,
  initialValue: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
}

const defaultProps = {
  defaultValues: [],
  defaultValue: '',
  initialValue: '',
  placeholder: '',
  onChange: () => {}
}

class DropDownPicker extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.defaultValue || props.initialValue
    }
  }

  render () {
    const { value, defaultValue, defaultValues, onChange } = this.props

    return (
      <div>
        <Select
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
        >
          {defaultValues.map((df, index) => {
            return <option key={index} value={df}>{df}</option>
          })}
        </Select>
      </div>
    )
  }
}

DropDownPicker.propTypes = propTypes
DropDownPicker.defaultProps = defaultProps

export default DropDownPicker
