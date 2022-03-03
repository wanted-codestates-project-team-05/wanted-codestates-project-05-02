import React from 'react';
import styled from 'styled-components';

export default function MatchDetail() {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 177px;
  margin-top: -5px;
  margin-bottom: 5px;
  border: 1px solid #f2f2f2;
  background-color: transparent;
`;

const Wrapper = styled.ul`
  width: 100%;
`;

const Row = styled.li`
  float: left;
  width: calc(100% / 9);
  text-align: center;
  font-weight: 400;
  background-color: #fff;
`;

const Rank = styled.div`
  background-color: #e6e8eb;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
  background-color: #f2f2f2;
`;

const Kart = styled.div`
  height: 78px;
  line-height: 78px;
`;

const User = styled.div`
  height: 17px;
  line-height: 17px;
`;

const Record = styled.div`
  height: 42px;
  line-height: 42px;
`;
