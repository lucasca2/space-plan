import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.secondary};
  padding: ${(p) => p.theme.spacing.small};
  margin: ${(p) => p.theme.spacing.medium} 0;
  border-radius: ${(p) => p.theme.baseRadius};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(p) => p.theme.spacing.ultraSmall};
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: ${(p) => p.theme.spacing.ultraSmall};
`;

export const Date = styled.div`
  opacity: .5;
`;

export const Info = styled.div`
  opacity: .5;
`;

export const Details = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: ${(p) => p.theme.spacing.small};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${(p) => p.theme.spacing.small};
`;
