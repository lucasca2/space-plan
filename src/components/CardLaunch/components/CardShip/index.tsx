import React from 'react';
import { TShipLaunch } from 'types/launch';

import {
  Wrapper,
  Content,
  Image,
  Title,
  Type,
} from './styles';

const CardShip: React.FC<TShipLaunch> = ({ name, type, image }: TShipLaunch) => (
  <Wrapper>
    <Image src={image} />
    <Content>
      <Title>{name}</Title>
      <Type>
        Type:
        {type}
      </Type>
    </Content>
  </Wrapper>
);

export default CardShip;
