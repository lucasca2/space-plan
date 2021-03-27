import React from 'react';

import rocket from 'static/rocket.svg';

import { Wrapper, Rocket, Overlay } from './styles';

const Loader: React.FC = () => (
  <Overlay>
    <Wrapper>
      <Rocket src={rocket} />
      <Rocket src={rocket} />
      <Rocket src={rocket} />
    </Wrapper>
  </Overlay>
);

export default Loader;
