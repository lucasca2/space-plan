import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

const opacify = keyframes`
  0% {
    opacity: .05;
  }
  
  50% {
    opacity: 1;
  }
  
  100% {
    opacity: .05;
  }
`;

export const Overlay = styled.div`
  background-color: ${(p) => transparentize(0.25, p.theme.colors.background)};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Rocket = styled.img`
  width: 40px;
  opacity: 0;
  
  will-change: opacity;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  
  & ${Rocket}:nth-child(1) {
    animation: ${opacify} .7s .1s infinite;
  }

  & ${Rocket}:nth-child(2) {
    animation: ${opacify} .7s .2s infinite;
  }

  & ${Rocket}:nth-child(3) {
    animation: ${opacify} .7s .3s infinite;
  }
  
`;
