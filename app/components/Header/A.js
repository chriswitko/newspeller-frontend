import styled from 'styled-components'

import NormalA from 'components/A'

const A = styled(NormalA)`
  padding: 2em 0;
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`

export default A
