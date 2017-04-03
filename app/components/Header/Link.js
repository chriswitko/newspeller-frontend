import styled from 'styled-components'

import { Link } from 'react-router'

const A = styled(Link)`
  text-decoration: none;
  color: #6B788A;
  font-weight: bold;

  &:hover {
    color: #6B788A;
    text-decoration: underline;
  }
`

export default A
