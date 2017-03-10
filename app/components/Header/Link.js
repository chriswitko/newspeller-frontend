import styled from 'styled-components'

import { Link } from 'react-router'

const A = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

export default A
