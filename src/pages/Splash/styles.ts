import styled from 'styled-components';

interface LogoProps {
  opacity: number;
}

export const Logo = styled.img < LogoProps > `
  width: 75%;
  max-width: 500px;
  opacity: ${(p) => p.opacity};
  
  transition: opacity 1s;
  will-change: opacity;
`;
