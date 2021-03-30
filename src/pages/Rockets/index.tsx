import React from 'react';
import { TRocket } from 'types/rocket';
import { getRockets } from 'services/rocket';
import CardRocket from 'components/CardRocket';
import Loader from 'components/Loader';
import Button from 'components/Button';

import { useRecursiveList } from 'hooks/useRecursiveList';
import { TParamsQuery } from 'types';
import Title from 'components/Title';
import { WrapperAction } from './styles';

const Rockets: React.FC = () => {
  const {
    data: rockets,
    getMoreData,
    isLoading,
    reachedTheEnd,
  } = useRecursiveList<TRocket, TParamsQuery>(getRockets);

  return (
    <>
      {isLoading && (
        <Loader />
      )}
      <Title text="Rockets" />
      {rockets.map((rocket) => (
        <CardRocket key={rocket.id} {...rocket} />
      ))}
      {(!reachedTheEnd && rockets.length !== 0) && (
        <WrapperAction>
          <Button width="250px" onClick={getMoreData}>
            Carregar Mais
          </Button>
        </WrapperAction>
      )}
    </>
  );
};

export default Rockets;
