import axios from 'axios';
import React, { Profiler, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import QueryString from 'qs';
import InfoContainer from '../components/UserInfoPage/InfoContainer';
import UserProfile from '../components/UserInfoPage/UserProfile';
import HomePage from './HomePage';
import CheerChat from '../components/UserInfoPage/CheerChat';

function UserInfoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [matchData, setMatchData] = useState({});
  const location = useLocation();
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  let apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTE3NTcxODMwIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0NjM1MDE4OSwiZXhwIjoxNjYxOTAyMTg5LCJpYXQiOjE2NDYzNTAxODl9.s4p-oYKxegfkKTWHuSqS-CZ1rgf1n2OJkZ5YSgx1kWk';

  const getUserData = async () => {
    setIsLoading(true);
    const user = await axios.get(`/kart/v1.0/users/nickname/${query.nick}`, {
      headers: {
        Authorization: apiKey,
      },
    });
    const matches = await axios.get(
      `/kart/v1.0/users/${user.data.accessId}/matches?limit=200&matchType=${query.matchType}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    setUserData(user.data);
    setMatchData(matches.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  // if (isLoading) return <div>Loading</div>;
  return (
    <Wrap>
      <Content>
        <UserProfile />
        <HomePage />
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  background-color: #fafafa;
  padding-bottom: 100px;
  min-height: 800px;
`;

const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 50px;
  background-color: #fafafa;
`;

export default UserInfoPage;
