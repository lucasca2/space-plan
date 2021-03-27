import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.colors.secondary};
`;

export const Content = styled.div`
  padding: ${(p) => `${p.theme.spacing.medium} ${p.theme.spacing.large}`};
  max-width: ${(p) => p.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 100%;
`;
