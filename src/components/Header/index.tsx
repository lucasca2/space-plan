import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Menu from './components/Menu';
import { Wrapper, Content, Logo } from './styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Menu />
    </Content>
  </Wrapper>
);

export default Header;
