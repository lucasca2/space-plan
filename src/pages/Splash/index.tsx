import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from './logo.svg';

import { Logo } from './styles';

const Splash: React.FC = () => {
  const [opacity, setOpacity] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setOpacity(1);
    setTimeout(() => {
      history.push('/launches');
    }, 1500);
  }, [history]);

  return (
    <Logo src={logo} alt="Space Plan" opacity={opacity} />
  );
};

export default Splash;
