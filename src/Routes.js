import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import UserInfoPage from './pages/UserInfoPage';
import RankPage from './pages/RankPage';
import Root from './pages/Root';

function Routes() {
  return (
    <Switch>
      <Route path={'/'} element={<Root />} />
      <Route path={'/user'} element={<UserInfoPage />} />
      <Route path={'/Rank'} element={<RankPage />} />
    </Switch>
  );
}

export default Routes;
