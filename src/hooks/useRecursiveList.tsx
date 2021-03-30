import { useEffect, useState } from 'react';
import { TParamsQuery } from 'types';

export function useRecursiveList<T, P>(request: (params: P | TParamsQuery) => Promise<T[]>) {
  const limit = 10;
  const [data, setData] = useState<T[]>([]);
  const [offset, setOffset] = useState(0);
  const [reachedTheEnd, setReachedTheEnd] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const list = await request({ offset, limit });

      if (list.length < limit) setReachedTheEnd(true);

      setData((prev) => [...prev, ...list]);
      setIsLoading(false);
    }

    getData();
  }, [offset]);

  function getMoreData() {
    setOffset((prev) => prev + limit);
  }

  return {
    data,
    getMoreData,
    reachedTheEnd,
    isLoading,
  };
}
