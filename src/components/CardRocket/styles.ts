import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.secondary};
  padding: ${(p) => p.theme.spacing.small};
  margin: ${(p) => p.theme.spacing.medium} 0;
  border-radius: ${(p) => p.theme.baseRadius};
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(p) => p.theme.spacing.ultraSmall};
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: ${(p) => p.theme.spacing.ultraSmall};
`;

export const Payload = styled.span`
  opacity: .5;
  margin: ${(p) => p.theme.spacing.ultraSmall}
`;

export const Info = styled.span`
  opacity: .5;
  margin: ${(p) => p.theme.spacing.ultraSmall} 0;
`;

export const Details = styled.span`
  margin: ${(p) => p.theme.spacing.medium} 0;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing.small};
`;
