import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: rgb(40, 60, 70);
  color: white;
  padding: 20px;
  width: 100%;
  font-size: 0.9em;

  a {
    color: #41addd;

    &:hover {
      color: #6cc0e5;
    }  
  }
`

export default Wrapper
