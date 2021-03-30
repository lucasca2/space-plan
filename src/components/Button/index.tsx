import React, { MouseEvent } from 'react';
import { Wrapper } from './styles';

type TButton = {
  children: React.ReactNode;
  onClick?: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<TButton> = ({
  children, onClick, width, type,
}: TButton) => (
  <Wrapper type={type} onClick={onClick} width={width}>
    {children}
  </Wrapper>
);

Button.defaultProps = {
  onClick: undefined,
  width: undefined,
  type: 'button',
};

export default Button;
