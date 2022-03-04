import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchList, fetchUserMatchList } from './matchList';
import { fetchMatchDetail } from './matchDetail';
import QueryString from 'qs';
import axios from 'axios';

const NetworkRequest = () => {
  // const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const query = { nick: 'BBEESSTT' };

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
    console.log(matchList.userMatchList.data?.matches[0].matches, 'data');
  };
  useEffect(() => {
    getData();
  }, []);

  const matchList = useSelector((state) => state.matchList);
  const dispatch = useDispatch();
  const handleGetMatchList = async () => {
    await dispatch(fetchMatchList('soloData'));
    await dispatch(fetchMatchList('teamData'));
    await dispatch(fetchMatchDetail('00b2000b40fdff27'));
  };
  return (
    <div>
      {console.log(matchList.userMatchList.data?.matches[0].matches, 'data')}
      <button onClick={handleGetMatchList}>네트워크 요청</button>
      <p>{matchList.userMatchList.data?.nickName}</p>
    </div>
  );
};

export default NetworkRequest;
