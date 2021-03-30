import React from 'react';
import { MdAdd } from 'react-icons/md';
import { getLaunches } from 'services/launch';
import CardLaunch from 'components/CardLaunch';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { TLaunch } from 'types/launch';
import { useRecursiveList } from 'hooks/useRecursiveList';
import { TParamsQuery } from 'types';
import FloatButton from 'components/FloatButton';
import Title from 'components/Title';
import { useHistory } from 'react-router-dom';
import { WrapperAction } from './styles';

/**
 * Achei desnecessário fazer a função que altera a quantidade e resultados,
 * tendo em vista que configurei um "infinite scroll"
 */

const Launches: React.FC = () => {
  const history = useHistory();
  const {
    data: launches,
    getMoreData,
    isLoading,
    reachedTheEnd,
  } = useRecursiveList<TLaunch, TParamsQuery>(getLaunches);

  return (
    <>
      {isLoading && (
        <Loader />
      )}
      <Title text="Launches" />
      {launches.map((launch) => (
        <CardLaunch key={launch.id} {...launch} />
      ))}
      {(!reachedTheEnd && launches.length !== 0) && (
        <WrapperAction>
          <Button width="250px" onClick={getMoreData}>
            Carregar Mais
          </Button>
        </WrapperAction>
      )}
      <FloatButton>
        <MdAdd onClick={() => history.push('/launches/save')} />
      </FloatButton>
    </>
  );
};

export default Launches;
