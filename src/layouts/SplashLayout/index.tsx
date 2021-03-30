import React from 'react';
import { Wrapper } from './styles';

type Props = {
  children: React.ReactNode
};

export default function SplashLayout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
