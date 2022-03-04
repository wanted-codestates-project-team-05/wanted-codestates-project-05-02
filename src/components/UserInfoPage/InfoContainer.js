import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MatchListContainer from './MatchListContainer';
import TabButton from './TabButton';
import axios from 'axios';
import * as QueryString from 'qs';
import { useLocation } from 'react-router';

export default function InfoContainer() {
  const [userData, setUserData] = useState({});
  const [matchData, setMatchData] = useState({});
  const location = useLocation();
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  let apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTE3NTcxODMwIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0NjM1MDE4OSwiZXhwIjoxNjYxOTAyMTg5LCJpYXQiOjE2NDYzNTAxODl9.s4p-oYKxegfkKTWHuSqS-CZ1rgf1n2OJkZ5YSgx1kWk';

  const getUserData = async () => {
    const user = await axios.get(
      `https://server-cors-wanted.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/nickname/${query.nick}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const matches = await axios.get(
      `https://server-cors-wanted.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/${user.data.accessId}/matches?limit=200&matchType=${query.matchType}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    setUserData(user.data);
    setMatchData(matches.data);
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <Container>
      <Left>
        <TabButton matchData={matchData} userData={userData} />
      </Left>
      <Right>
        <MatchListContainer matchData={matchData} userData={userData} />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  color: #1f334a;
  letter-spacing: -1px;
`;

const Left = styled.div`
  flex: 1;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 2;
  padding-top: 40px;
`;
