import React, { useCallback, useEffect, useState } from 'react';
import { TRocket } from 'types/rocket';
import { getRockets } from 'services/rocket';
import CardRocket from 'components/CardRocket';
import Loader from 'components/Loader';
import Button from 'components/Button';

import { WrapperAction } from './styles';

const Rockets: React.FC = () => {
  const limit = 10;
  const [rockets, setRockets] = useState<TRocket[]>([]);
  const [offset, setOffset] = useState(0);
  const [reachedTheEnd, setReachedTheEnd] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const data = await getRockets({ offset, limit });

      if (data.length < limit) setReachedTheEnd(true);

      setRockets((prev) => [...prev, ...data]);
      setIsLoading(false);
    }

    getData();
  }, [offset]);

  const handleClickMoreData = useCallback(() => {
    setOffset((prev) => prev + limit);
  }, []);

  return (
    <>
      {isLoading && (
        <Loader />
      )}
      {rockets.map((rocket) => (
        <CardRocket {...rocket} />
      ))}
      {(!reachedTheEnd && rockets.length !== 0) && (
        <WrapperAction>
          <Button width="250px" onClick={handleClickMoreData}>
            Carregar Mais
          </Button>
        </WrapperAction>
      )}
    </>
  );
};

export default Rockets;
