import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Link } from './styles';

type TItem = {
  children: React.ReactNode;
  to: string;
}

const Item: React.FC<TItem> = ({ to, children }: TItem) => {
  const match = useRouteMatch({
    path: to,
    exact: false,
  });

  return (
    <Link
      to={to}
      className={match ? 'active' : ''}
    >
      {children}
    </Link>
  );
};

export default Item;
