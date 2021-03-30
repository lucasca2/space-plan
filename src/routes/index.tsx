import React from 'react';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';

import SplashLayout from 'layouts/SplashLayout';
import AppLayout from 'layouts/AppLayout';

import Splash from 'pages/Splash';
import Launches from 'pages/Launches';
import SaveLaunch from 'pages/SaveLaunch';
import Rockets from 'pages/Rockets';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact>
      <SplashLayout>
        <Splash />
      </SplashLayout>
    </Route>
    <AppLayout>
      <Route path="/launches" exact><Launches /></Route>
      <Route path="/launches/save" exact><SaveLaunch /></Route>
      <Route path="/rockets" exact><Rockets /></Route>
    </AppLayout>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
