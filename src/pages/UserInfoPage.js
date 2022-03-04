import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import QueryString from 'qs';
import HomePage from './HomePage';
import { fetchUserMatchList } from '../Reducer/matchList';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/common/Loading';
import Profile from '../components/UserInfoPage/Profile';
import InfoContainer from '../components/UserInfoPage/InfoContainer';

function UserInfoPage() {
  //리덕스
  const dispatch = useDispatch();
  const matchList = useSelector((state) => state.matchList);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const getData = async () => {
    const user = await axios.get(
      `https://server-cors-wanted.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/nickname/${query.nick}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_NEXON_AUTHORIZATION,
        },
      }
    );
    await dispatch(fetchUserMatchList(user.data.accessId));
  };

  const RequestData = async () => {
    setIsLoading(true);
    await getData();
    setIsLoading(false);
  };
  useEffect(() => {
    RequestData();
  }, [location.pathname]);

  if (isLoading) return <Loading message="데이터를 준비중입니다..." />;
  return (
    <Wrap>
      {matchList.userMatchList.data && (
        <Content>
          <Profile char={matchList.userMatchList.data?.matches[0].matches[0].character} />
          <HomePage userMatchList={matchList.userMatchList.data?.matches[0].matches} />
          <InfoContainer />
        </Content>
      )}
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
