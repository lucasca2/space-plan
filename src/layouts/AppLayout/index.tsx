import React from 'react';
import Header from 'components/Header';
import { Wrapper, Content } from './styles';

type Props = {
  children: React.ReactNode
};

export default function AppLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}
