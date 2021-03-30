import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
  margin: ${(p) => p.theme.spacing.small} 0;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: ${(p) => p.theme.spacing.small};
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
`;

export const Title = styled.span`
`;

export const Type = styled.span`
  opacity: .5;
`;
