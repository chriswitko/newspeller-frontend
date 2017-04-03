import styled from 'styled-components'

const UlLogos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;

  li {
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 5px;
    border-radius: 3px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export default UlLogos
