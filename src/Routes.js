import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserInfoPage from './pages/UserInfoPage';
import TrackPage from './pages/TrackPage';

function Routes(){

	return (
		<Switch>
			<Route path={'/'} element={<HomePage/>} />
			<Route path={'/user'} element={<UserInfoPage/>} />
			<Route path={'/track'} element={<TrackPage/>} />
		</Switch>
	)
}

export default Routes