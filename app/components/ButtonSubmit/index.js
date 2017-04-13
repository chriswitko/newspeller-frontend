import styled from 'styled-components'

const disabled = (disabled = false, color = '#4745d1', textColor = '#ffffff') => {
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

      &:active {
        background: ${color};
        color: ${textColor};
        border-color: ${textColor};
      }
    `
  }
}

export default styled.button`
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

  ${props => disabled(props.disabled, props.color, props.textColor)};
`
