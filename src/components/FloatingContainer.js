import styled from 'styled-components';

const FloatingContainer = styled.section`
  padding: 40px;
  margin: -40px auto 0 auto;
  background: #fff;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export default FloatingContainer;
