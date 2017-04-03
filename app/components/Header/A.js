import styled from 'styled-components'

import NormalA from 'components/A'

const A = styled(NormalA)`
  padding: 2em 0;
  text-decoration: none;
  color: #6B788A;
  font-weight: bold;

  &:hover {
    color: #6B788A;
    text-decoration: underline;
  }
`

export default A
