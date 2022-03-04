import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({
      pathname: '/user',
      search: '?nick=BBEESSTT',
    });
  }, []);
  return <div>로딩..</div>;
};

export default Root;
