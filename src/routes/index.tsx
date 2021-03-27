import React from 'react';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';

import SplashLayout from 'layouts/SplashLayout';
import AppLayout from 'layouts/AppLayout';

import Splash from 'pages/Splash';
import Launch from 'pages/Launch';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact>
      <SplashLayout>
        <Splash />
      </SplashLayout>
    </Route>
    <AppLayout>
      <Route path="/launch" exact><Launch /></Route>
    </AppLayout>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
