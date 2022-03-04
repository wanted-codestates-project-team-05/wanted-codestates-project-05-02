import React from 'react';
import styled from 'styled-components';

const Track = () => {
  return <Container>{/*<TrackChart size={'200px'} />*/}</Container>;
};

export default Track;

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
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 13px;
`;
