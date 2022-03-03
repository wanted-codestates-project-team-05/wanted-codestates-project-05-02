import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchList } from './getMatchList';

const NetworkRequest = () => {
  const matchList = useSelector((state) => state.getMatchList);
  const dispatch = useDispatch();
  const handleGetMatchList = () => {
    dispatch(fetchMatchList());
  };
  return (
    <div>
      <button onClick={handleGetMatchList}>네트워크 요청</button>
      <p>{matchList}</p>
    </div>
  );
};

export default NetworkRequest;
