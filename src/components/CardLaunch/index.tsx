import React, { useState } from 'react';
import Button from 'components/Button';
import { TCardLaunch } from './types';

import {
  Wrapper,
  Header,
  Title,
  Date,
  Info,
  Details,
  Footer,
} from './styles';

const CardLaunch: React.FC<TCardLaunch> = ({
  id,
  mission_name,
  launch_date_utc,
  launch_site,
  details,
}: TCardLaunch) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Info>
          ID:&nbsp;
          {id}
        </Info>
        <Date>{launch_date_utc}</Date>
      </Header>
      <Title>{mission_name}</Title>
      <Info>
        Launch Site:&nbsp;
        {launch_site?.site_name_long}
      </Info>
      <Details>{details}</Details>

      <Footer>
        <Button width="175px" onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? 'Mostrar Menos' : 'Mostrar Mais'}
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default CardLaunch;
