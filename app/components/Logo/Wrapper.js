import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0;
  height: 50px;
  margin: ${props => props.bottomed ? '20px' : '0'};
`

export default Wrapper
