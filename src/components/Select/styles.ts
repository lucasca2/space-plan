import styled, { css } from 'styled-components';
import BaseInput from 'components/BaseInput';

export const StyledSelect = styled(BaseInput.withComponent('div'))`
  position: relative;
  cursor: pointer;
`;

export const PlaceHolder = styled.span`
  color: ${(p) => p.theme.colors.placeholder};
`;

export const Value = styled.span``;

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  font-size: 20px;
  
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    
    transform: translate(-50%, -50%);
  }
`;

type TDropdown = {
  isOpen: boolean;
}

export const Dropdown = styled.div < TDropdown > `
  user-select: none;
  border-radius: 0 0 ${(p) => p.theme.baseRadius} ${(p) => p.theme.baseRadius};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  
  max-height: 200px;
  overflow: auto;
  z-index: 1;
  
  ${(p) => !p.isOpen && css`
    visibility: hidden;
  `}
`;

type TOption = {
  active: boolean;
}

export const Option = styled.span < TOption > `
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.secondary};
  padding: 10px 10px;
  
  transition: background-color .3s, color .3s;
  will-change: background-color, color;
  
  
  &:hover {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.text};  
  }
  
  & svg {
    margin-right: 5px;  
  }

  ${(p) => p.active && css`
    color: ${p.theme.colors.primary};
  `}
`;
