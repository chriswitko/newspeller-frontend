import styled from 'styled-components'
import { Link } from 'react-router'

const disabled = (disabled = false, color = '#4745d1') => {
  if (disabled) {
    return `
      color: #e5e5e5;
      border-color: #e5e5e5;

      &:active {
        background: #e5e5e5;
        color: #e5e5e5;
      }
    `
  } else {
    return `
      color: ${color};
      border-color: ${color};

      span {
        color: ${color};
      }

      &:active {
        background: ${color};
        color: white;

        span {
          color: white;
        }
      }

      &:hover {
        text-decoration: none;
      }
    `
  }
}

export default styled(Link)`
  padding: ${props => props.lg ? '1em 1.5em' : '0.65em 1em'};
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border-style: solid;
  border-width: 2px;
  display: inline-block;

  ${props => disabled(props.disabled, props.color)};
`
