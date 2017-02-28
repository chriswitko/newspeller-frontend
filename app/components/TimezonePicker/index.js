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


const UP_KEY = 38
const DOWN_KEY = 40
const ENTER_KEY = 13
const RETURN_KEY = 14
const ESCAPE_KEY = 27

const propTypes = {
  absolute: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  initialValue: PropTypes.any,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  timezones: PropTypes.object,
  style: PropTypes.object,
  value: PropTypes.any
}

const defaultProps = {
  absolute: true,
  defaultValue: '',
  initialValue: '',
  placeholder: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  overflow: false,
  style: {},
  timezones: defaultTimezones
}

class TimezonePicker extends Component {
  static zoneCompare (key, filter) {
    return key.toLowerCase().indexOf(filter.toLowerCase().trim()) !== -1
  }

  constructor (props) {
    super(props)

    this.filterItems = this.filterItems.bind(this)
    this.getTimezone = this.getTimezone.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.scrollToIndex = this.scrollToIndex.bind(this)

    this.state = {
      focused: 0,
      isOpen: false,
      timezones: this.props.timezones,
      value: props.value || props.defaultValue || props.initialValue
    }

    this.prevValue = this.state.value
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      const value = this.getTimezone(nextProps.value) || ''

      this.setState({ value })
    }
  }

  getTimezone (query) {
    if (!query) {
      return null
    }

    return Object.keys(this.props.timezones).find(zone => zone === query || this.props.timezones[zone] === query)
  }

  filterItems (filter) {
    const { timezones } = this.props

    if (filter.trim().length === 0) {
      return timezones
    }

    const filteredTimezones = {}

    Object.keys(timezones).forEach((key) => {
      if (this.constructor.zoneCompare(key, filter) || this.constructor.zoneCompare(timezones[key], filter)) {
        filteredTimezones[key] = timezones[key]
      }
    })

    return filteredTimezones
  }

  handleBlur () {
    const tz = this.getTimezone(this.state.value)

    if (tz === undefined) {
      this.setState({ value: '', timezones: this.props.timezones })
      if (this.prevValue) {
        this.props.onChange('')
        this.prevValue = ''
      }
    }

    this.setState({ isOpen: false })

    this.props.onBlur()
  }

  handleFilterChange (e) {
    const timezones = this.filterItems(e.target.value)

    this.setState({
      focused: 0,
      isOpen: Object.keys(timezones).length > 0,
      value: e.target.value || '',
      timezones
    })
  }

  handleFocus (ev) {
    const { value, timezones } = this.state
    if (ev) {
      ev.target.select()
    }

    if (value) {
      const keyz = Object.keys(timezones)

      for (let i = 0; i < keyz.length; ++i) {
        if (keyz[i] === value || timezones[keyz[i]] === value) {
          this.setState(
            { isOpen: true, focused: i },
            () => { this.scrollToIndex(i) }
          )

          this.props.onFocus(ev)

          return
        }
      }
    }

    this.setState({ isOpen: true })

    this.props.onFocus()
  }

  handleKeyPress (e) {
    const { focused, timezones, isOpen } = this.state

    if (e.which === UP_KEY || e.which === DOWN_KEY) {
      e.preventDefault()

      let newFocused

      if (e.which === UP_KEY) {
        newFocused = focused === 0 ? Object.keys(timezones).length - 1 : focused - 1
      } else {
        newFocused = focused === Object.keys(timezones).length - 1 ? 0 : focused + 1
      }

      this.setState({ focused: newFocused })

      this.scrollToIndex(newFocused)
    } else if (e.which === ENTER_KEY || e.which === RETURN_KEY) {
      this.handleSelect(focused)
    } else if (e.which === ESCAPE_KEY) {
      findDOMNode(this.refInput).blur()
      this.handleBlur()
    }

    this.props.onKeyDown(e)
  }

  handleMouseEnter (idx, e) {
    if (e.pageX !== this.mouseX || e.pageY !== this.mouseY) {
      if (this.disableMouse) {
        this.disableMouse = false
        this.mouseY = e.pageY
        return
      }

      this.mouseX = e.pageX
      this.mouseY = e.pageY
      this.setState({ focused: idx })
    }
  }

  handleSelect (index) {
    const { timezones } = this.state

    const key = Object.keys(timezones)[index] || ''
    const value = timezones[key] || ''

    if (this.prevValue !== value) {
      this.prevValue = value
      this.props.onChange(value)
    }

    this.setState({
      focused: 0,
      isOpen: false,
      timezones: this.props.timezones,
      value: key
    }, () => { findDOMNode(this.refInput).blur() })
  }

  scrollToIndex (idx) {
    const index = Math.max(0, idx - 3)

    this.disableMouse = true
    findDOMNode(this.list).scrollTop = this.list.children[index].offsetTop
  }

  render () {
    const { defaultValue, onChange } = this.props
    console.log('defaultValue', defaultValue)
    return (
      <div>
        <Select
          value={defaultValue}
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
