import React from 'react';
import logo from './logo.svg';

import { Wrapper, Content, Logo } from './styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Logo src={logo} />
    </Content>
  </Wrapper>
);

export default Header;
