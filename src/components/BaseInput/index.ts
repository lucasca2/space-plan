import styled from 'styled-components';

export const BaseInput = styled.div`
  border: none;
  width: 100%;
  padding: 10px;
  height: 40px;
  outline: none;
  background-color: #121214;
  color: ${(p) => p.theme.colors.text};
  border-radius: ${(p) => p.theme.baseRadius};
`;

export default BaseInput;
