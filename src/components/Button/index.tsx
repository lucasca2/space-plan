import React, { MouseEvent } from 'react';
import { Wrapper } from './styles';

type TButton = {
  children: React.ReactNode;
  onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  width?: string;
}

const Button: React.FC<TButton> = ({ children, onClick, width }: TButton) => (
  <Wrapper onClick={onClick} width={width}>
    {children}
  </Wrapper>
);

Button.defaultProps = {
  onClick: undefined,
  width: undefined,
};

export default Button;
