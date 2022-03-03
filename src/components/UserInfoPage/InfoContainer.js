import React from 'react';
import styled from 'styled-components';
import MatchListContainer from './MatchListContainer';
import TabButton from './TabButton';

export default function InfoContainer({ userData, matchData }) {
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
