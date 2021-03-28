import React, { useState } from 'react';

import Button from 'components/Button';

import { TRocket } from 'types/rocket';
import {
  Wrapper,
  Header,
  Title,
  Info,
  Details,
  Payload,
  Footer,
} from './styles';

const CardRocket: React.FC<TRocket> = ({
  id,
  name,
  stages,
  active,
  diameter,
  height,
  description,
  engines,
  payload_weights,
}: TRocket) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Info>
          ID:&nbsp;
          {id}
        </Info>
        <Info>
          {active ? 'Ativo' : 'Inativo'}
        </Info>
      </Header>
      <Title>{name}</Title>
      {showMore && (
        <>
          <Info>
            Stages:&nbsp;
            {stages}
          </Info>
          <Info>
            Height:&nbsp;
            {height.feet}
            ft
          </Info>
          <Info>
            Diameter:&nbsp;
            {diameter.feet}
            ft
          </Info>
          <Info>
            Engines:&nbsp;
            {engines.number}
            {' '}
            {engines.type}
          </Info>
          <Details>{description}</Details>
          <Info>Cargas:</Info>
          {payload_weights?.map((payload) => (
            <Payload>
              {'- '}
              {payload.name}
              {': '}
              {payload.lb.toLocaleString('en-US')}
              {' lb'}
            </Payload>
          ))}
        </>
      )}
      <Footer>
        <Button width="175px" onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? 'Mostrar Menos' : 'Mostrar Mais'}
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default CardRocket;