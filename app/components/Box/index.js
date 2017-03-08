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
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  border-radius: 5px;

  ${props => fullScreen(props.fullScreen)}
`

export default Box;