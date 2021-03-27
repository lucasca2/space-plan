import React, { useCallback, useEffect, useState } from 'react';
import { getLaunches } from 'services/launch';
import CardLaunch from 'components/CardLaunch';
import Loader from 'components/Loader';
import Button from 'components/Button';

import { TCardLaunch } from 'components/CardLaunch/types';
import { WrapperAction } from './styles';

/**
 * Achei desnecessário fazer a função que altera a quantidade e resultados,
 * tendo em vista que configurei um "infinite scroll"
 */

const Launch: React.FC = () => {
  const limit = 10;
  const [launches, setLaunches] = useState<TCardLaunch[]>([]);
  const [offset, setOffset] = useState(0);
  const [reachedTheEnd, setReachedTheEnd] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const data = await getLaunches({ offset, limit });

      if (data.length === 0) setReachedTheEnd(true);

      setLaunches((prev) => [...prev, ...data]);
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
      {launches.map((launch) => (
        <CardLaunch {...launch} />
      ))}
      {(!reachedTheEnd && launches.length !== 0) && (
        <WrapperAction>
          <Button width="250px" onClick={handleClickMoreData}>
            Carregar Mais
          </Button>
        </WrapperAction>
      )}
    </>
  );
};

export default Launch;
