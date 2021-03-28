import React, { useState } from 'react';
import { format } from 'date-fns';

import Button from 'components/Button';
import { TLaunch } from 'types/launch';

import {
  Wrapper,
  Header,
  Title,
  DateFormatted,
  Info,
  Details,
  Footer,
} from './styles';

import CardShip from './components/CardShip';

const CardLaunch: React.FC<TLaunch> = ({
  id,
  mission_name,
  launch_date_utc,
  launch_site,
  details,
  rocket,
  ships,
}: TLaunch) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Info>
          ID:&nbsp;
          {id}
        </Info>
        <DateFormatted>{format(new Date(launch_date_utc), 'MMMM dd, yyyy')}</DateFormatted>
      </Header>
      <Title>{mission_name}</Title>
      {showMore && (
        <>
          <Info>
            Launch Site:&nbsp;
            {launch_site?.site_name_long}
          </Info>
          <Info>
            Rocket:&nbsp;
            {rocket.rocket_name}
          </Info>
          <Details>{details}</Details>
          {ships.length > 0 && (<Info>Ships:</Info>)}
          {ships?.map((ship) => (
            <CardShip key={ship.name} {...ship} />
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

export default CardLaunch;
