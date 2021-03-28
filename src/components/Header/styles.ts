import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.colors.secondary};
`;

export const Content = styled.div`
  padding: 0 ${(p) => p.theme.spacing.large};
  max-width: ${(p) => p.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  padding: ${(p) => p.theme.spacing.medium} 0;
  width: 175px;
`;
