import styled from 'styled-components';
import RadialChart from '../chart/RadialChart';
import CardContainer from '../common/CardContainer';
import React from 'react';

const Total = (props) => {
  return (
    <CardContainer firstTitle="종합" secondTitle="전적" des={`200전 ${props.winCount}승 ${200 - props.winCount}패`}>
      <ChartContainer>
        <div>
          <ChartTitle>승률</ChartTitle>
          <RadialChart percent={(props.winCount / 2).toFixed(0)} color="#0A5CFF" size="150px" />
        </div>
        <CenterChart>
          <ChartTitle>완주율</ChartTitle>
          <RadialChart percent={((200 - props.retired) / 2).toFixed(0)} color="#8CD31F" size="150px" />
        </CenterChart>
        <div>
          <ChartTitle>리타이어율</ChartTitle>
          <RadialChart percent={(props.retired / 2).toFixed(0)} color="#F00047" size="150px" />
        </div>
      </ChartContainer>
      <Footer>
        <span>
          <span style={{ color: '#5198FF' }}>최다주행 </span>
          <span>모드</span>
        </span>
        <span style={{ fontSize: '20px', font: 'bold', fontWeight: '600' }}>통합</span>
      </Footer>
    </CardContainer>
  );
};

export default Total;

const Container = styled.div`
  width: 300px;
  height: 265px;
  margin: 10px;
`;

const Title = styled.div`
  display: flex;
  padding-bottom: 10px;
  font-size: 15px;
  justify-content: space-between;
  border-bottom: 1px #e6e6e6 solid;
`;

const ChartTitle = styled.div`
  padding-top: 5px;
  text-align: center;
`;

const CenterChart = styled.div`
  border-left: 1px #e6e6e6 solid;
  border-right: 1px #e6e6e6 solid;
`;

const ChartContainer = styled.div`
  display: flex;
  padding: 5px;
  height: 159px;
  margin: 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

const Footer = styled.div`
  height: 100%;
  align-items: center;
  margin: 0 12px;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
`;
