import React from 'react';
import styled from 'styled-components';

export default function Match() {
  return (
    <Section>
      <Div>
        <TypeP>1일 전</TypeP>
        <ResultP>
          #2<span style={{ marginLeft: '5px', fontSize: '16px' }}>/8</span>
        </ResultP>
        <TrackP>마비노기 티르 코네일 </TrackP>
        <KartP>뉴 골든 세이버 LE </KartP>
        <TimeP>1'15'07</TimeP>
        <OpenP>
          <Triangle />
        </OpenP>
      </Div>
    </Section>
  );
}

const Section = styled.section`
  background-color: black;
`;

const Div = styled.div`
  position: relative;
  display: table;
  box-sizing: border-box;
  margin-bottom: 5px;
  width: 100%;
  height: 88px;
  font-size: 16px;
  background-color: #fff;
  border-width: 1px 1px 1px 4px;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;
  border-style: solid;
`;

const P = styled.p`
  display: table-cell;
  vertical-align: middle;
  width: 150px;
  height: 30px;
  color: #1f334a;
  letter-spacing: -1px;
`;

const TrackP = styled(P)`
  position: relative;
  font-weight: 400;
  text-align: center;
  &:after {
    content: '';
    position: abolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }
`;

const KartP = styled(P)`
  position: relative;
  font-weight: 400;
  text-align: center;
  &:after {
    content: '';
    position: abolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }
`;

const TimeP = styled(P)`
  width: 100px;
  font-weight: 500;
  text-align: center;
`;

const ResultP = styled(P)`
  width: 260px;
  padding-left: 10px;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  text-align: left;
  opacity: 0.5;
`;

const TypeP = styled(P)`
  width: 65px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

const OpenP = styled(P)`
  position: abolute;
  box-sizing: border-box;
  right: 0;
  width: 40px;
  height: 87px;
  font-weight: 400;
  text-align: center;
  border-left: 1px solid #ebebeb;
  &:hover {
    background-color: #ebebeb;
  }
`;

const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  border-color: #a1a1a1 transparent transparent transparent;
`;
