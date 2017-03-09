import { Link } from 'react-router'
import styled from 'styled-components'

export default styled(Link)`
  display: inline-flex;
  padding: 0.6em 1.5em;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.14902);
  color: #ffffff;
  background-color: rgb(0, 136, 201);
  text-decoration: none;
  
  &:active {
    background: #41ADDD;
    color: #FFF;
  }

  &:hover {
    color: #fff;
  }
`
