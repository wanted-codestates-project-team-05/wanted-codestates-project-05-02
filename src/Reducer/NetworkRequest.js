import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchList, fetchUserMatchList } from './matchList';
import { fetchMatchDetail } from './matchDetail';

const NetworkRequest = () => {
  const matchList = useSelector((state) => state.matchList);
  const matchDetail = useSelector((state) => state.matchDetail);
  const dispatch = useDispatch();
  const handleGetMatchList = async () => {
    await dispatch(fetchUserMatchList(1963163935));
    await dispatch(fetchMatchList('soloData'));
    await dispatch(fetchMatchList('teamData'));
    await dispatch(fetchMatchDetail('00b2000b40fdff27'));
  };
  return (
    <div>
      <button onClick={handleGetMatchList}>네트워크 요청</button>
      <p>{matchList.userMatchList.data?.nickName}</p>
    </div>
  );
};

export default NetworkRequest;
