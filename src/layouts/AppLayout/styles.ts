import styled from 'styled-components';

export const Wrapper = styled.main`
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${(p) => p.theme.maxWidth};
  padding: ${(p) => `${p.theme.spacing.medium} ${p.theme.spacing.large}`};
  display: flex;
  flex-direction: column;
`;
