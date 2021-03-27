import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
