import styled, { css } from 'styled-components';

type TLabel = {
  width?: number;
  error?: boolean;
}

export const Label = styled.label < TLabel > `
  width: ${(p) => (p.width ? p.width * 100 : 100)}%;
  padding: ${(p) => p.theme.spacing.ultraSmall};
  
  ${(p) => p.error && css`
    & > div, input {
      border: 1px solid ${p.theme.colors.danger};
    }
  `}
  
`;

export const Error = styled.span`
  color: ${(p) => p.theme.colors.danger};
  font-size: 12px;
`;
