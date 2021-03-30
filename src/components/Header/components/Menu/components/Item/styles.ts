import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Link = styled(LinkRouter)`
  color: ${(p) => p.theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 100%;
  margin: 0 ${(p) => p.theme.spacing.medium};
  border-bottom: 2px solid transparent;
  opacity: .5;
  
  transition: border-bottom-color .3s, opacity .3s;
  will-change: border-bottom-color, opacity;
  
  &:hover, &.active {
    opacity: 1;
  }
  
  &.active {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;
