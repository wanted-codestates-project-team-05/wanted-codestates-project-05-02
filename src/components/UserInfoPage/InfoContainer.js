import React from 'react';
import styled from 'styled-components';
import TrackTable from './TrackTable';
import MatchListContainer from './MatchListContainer';

export default function InfoContainer() {
  return (
    <Container>
      <Left>
        <TabButton />
        <TrackTable />
      </Left>
      <Right>
        <MatchListContainer />
      </Right>
    </Container>
  );
}

const TabButton = () => {
  return (
    <div>
      <ul>
        <Li>
          <div>
            <span>트랙</span>
          </div>
        </Li>
        <Li>
          <div>
            <span>카트</span>
          </div>
        </Li>
      </ul>
    </div>
  );
};

const Li = styled.li`
  float: left;
  & div {
    box-sizing: border-box;
    background-color: #ebebeb;
    border-bottom: 2px solid #ebebeb;
    width: 116px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 14px;
  }
`;

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
