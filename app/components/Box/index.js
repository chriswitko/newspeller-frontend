import styled from 'styled-components';

const fullScreen = (enabled) => {
  return enabled ? `
    display: flex;
    flex: 1;
    min-height: 100vh;
    border-radius: 0;
  ` : ``
}

const Box = styled.div`
  max-width: 100%;

  ${props => fullScreen(props.fullScreen)}
`

export default Box;