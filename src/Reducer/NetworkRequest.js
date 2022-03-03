import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMatchList } from './matchList';

const NetworkRequest = () => {
  const matchList = useSelector((state) => state.getMatchList);
  const dispatch = useDispatch();
  const handleGetMatchList = () => {
    dispatch(fetchUserMatchList(1963163935));
  };
  return (
    <div>
      <button onClick={handleGetMatchList}>네트워크 요청</button>
      <p>{matchList.userMatchListData?.nickName}</p>
    </div>
  );
};

export default NetworkRequest;
