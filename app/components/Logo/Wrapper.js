import styled from 'styled-components';

const bottomed = (yes) => {
  return yes ? 'margin: 20px;' : 'margin: 0;'
}

const Wrapper = styled.div`
  padding: 0;

  ${props => bottomed(props.bottomed)}
`;

export default Wrapper;
