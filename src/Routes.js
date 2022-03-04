import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserInfoPage from './pages/UserInfoPage';
import RankPage from './pages/RankPage';

function Routes() {
  return (
    <Switch>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/user'} element={<UserInfoPage />} />
      <Route path={'/Rank'} element={<RankPage />} />
    </Switch>
  );
}

export default Routes;
