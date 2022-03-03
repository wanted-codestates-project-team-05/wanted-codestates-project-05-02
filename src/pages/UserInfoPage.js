import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoContainer from '../components/UserInfoPage/InfoContainer';
import { useLocation } from 'react-router-dom';
import QueryString from 'qs';

function UserInfoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [matchData, setMatchData] = useState({});
  const location = useLocation();
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  let apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTE3NTcxODMwIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0NjI3ODA3NywiZXhwIjoxNjYxODMwMDc3LCJpYXQiOjE2NDYyNzgwNzd9.6zBFVMmC8McG1l_-k5YkKkaY3Grn12ZM_jFRMK8fkSY';

  const getUserData = async () => {
    setIsLoading(true);
    const user = await axios.get(`/users/nickname/${query.nick}`, {
      headers: { Authorization: apiKey },
    });
    const matches = await axios.get(`/users/${user.data.accessId}/matches?limit=200`, {
      headers: { Authorization: apiKey },
    });
    setUserData(user.data);
    setMatchData(matches.data);
    console.log(matches.data);
    console.log(user.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) return <div>Loading</div>;
  return (
    <Container>
      <Wrapper>
        <InfoContainer userData={userData} matchData={matchData} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: #fafafa;
  padding-bottom: 100px;
  min-height: 800px;
`;

const Wrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding-top: 50px;
  background-color: #fafafa;
`;

export default UserInfoPage;
