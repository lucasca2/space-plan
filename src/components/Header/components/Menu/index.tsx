import React from 'react';

import Item from './components/Item';
import { Wrapper } from './styles';

const Menu: React.FC = () => (
  <Wrapper>
    <Item to="/launches">Launches</Item>
    <Item to="/rockets">Rockets</Item>
  </Wrapper>
);

export default Menu;
