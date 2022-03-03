import React from 'react';
import styled from 'styled-components';
import MatchListContainer from './MatchListContainer';
import { useLocation } from 'react-router-dom';
import QueryString from 'qs';
import TabButton from './TabButton';

export default function InfoContainer() {
  const location = useLocation();
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <Container>
      <Left>
        <TabButton />
      </Left>
      <Right>
        <MatchListContainer />
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
