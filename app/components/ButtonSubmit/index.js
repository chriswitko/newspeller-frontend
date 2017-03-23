import styled from 'styled-components'

const disabled = (yes) => {
  return yes ? `
    background-color: #d5d5d5;
    color: #e5e5e5;
  ` : `
    background-color: rgb(0, 136, 201);
    color: #ffffff;
  `
}

export default styled.button`
  display: inline-flex;
  padding: 0.6em 1.5em;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.14902);
  color: #ffffff;
  ${props => disabled(props.disabled)}

  &:active {
    background: #41ADDD;
    color: #ffffff;
  }
`
