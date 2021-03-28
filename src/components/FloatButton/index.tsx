import React, { MouseEvent } from 'react';
import { Wrapper } from './styles';

type TFloatButton = {
  children: React.ReactNode;
  onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const FloatButton: React.FC<TFloatButton> = ({ children, onClick }: TFloatButton) => (
  <Wrapper onClick={onClick}>
    {children}
  </Wrapper>
);

FloatButton.defaultProps = {
  onClick: undefined,
};

export default FloatButton;
