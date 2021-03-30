import styled from 'styled-components';
import { transparentize } from 'polished';

type TWrapper = {
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Wrapper = styled.button < TWrapper > `
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: ${(p) => p.theme.baseRadius};
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.primary};
  padding: 10px 25px;
  font-weight: 500;
  
  width: ${(p) => p.width || 'auto'};
  
  transition: background-color .18s;
  will-change: background-color;
  
  &:hover {
    background-color: ${(p) => transparentize(0.25, p.theme.colors.primary)};
  }

  &:active {
    background-color: ${(p) => transparentize(0.50, p.theme.colors.primary)};
  }
`;
