import styled from 'styled-components';
import { transparentize } from 'polished';

export const Wrapper = styled.button`
  position: sticky;
  bottom: 100px;
  margin-right: 50px;
  align-self: flex-end;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.primary};
  font-weight: 500;
  
  width: 60px;
  height: 60px;
  border-radius: 100%;
  font-size: 26px;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
  
  transition: background-color .18s;
  will-change: background-color;
  
  &:hover {
    background-color: ${(p) => transparentize(0.25, p.theme.colors.primary)};
  }

  &:active {
    background-color: ${(p) => transparentize(0.50, p.theme.colors.primary)};
  }
`;
