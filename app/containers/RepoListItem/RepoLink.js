import styled from 'styled-components'

import A from 'components/A'

const RepoLink = styled(A)`
  height: 100%;
  line-height: 15px;
  color: black;
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`

export default RepoLink
