import styled from 'styled-components'
import arrows from './select_up_down_arrow.svg'

const Select = styled.select`
  outline: none;
  color: #283c46;
  background: #fff url(${arrows}) no-repeat right 0.8em center;
  background-size: 0.55em;
  max-width: 100%;
  border-radius: 0.4rem;
  border: 1px solid #bfbfbf;
  transition: box-shadow 0.15s ease-in-out;
  border-radius: 0.4rem;
  border: 1px solid #bfbfbf;
  padding: 0.6rem;
  padding-right: 2.6em;
  margin-right: 1em;
  background-color: #fff;
  display: inline-table;
  display: block;
  font-family: inherit;
  font-weight: inherit;
  -webkit-appearance: none;
  -moz-appearance: none
`

export default Select
