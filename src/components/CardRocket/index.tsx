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
            {height.feet?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            ft
          </Info>
          <Info>
            Diameter:&nbsp;
            {diameter.feet?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            ft
          </Info>
          <Info>
            Engines:&nbsp;
            {engines.number}
            {' '}
            {engines.type}
          </Info>
          <Details>{description}</Details>
          <Info>Payloads:</Info>
          {payload_weights?.map((payload) => (
            <Payload key={payload.name}>
              {'- '}
              {payload.name}
              {': '}
              {payload.lb.toLocaleString('en-US', { maximumFractionDigits: 2 })}
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
