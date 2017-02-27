import styled from 'styled-components'

export default styled.button`
  display: inline-flex;
  padding: 0.6em 1.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.14902);
  color: #ffffff;
  background-color: rgb(0, 136, 201);
  
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`
