import styled from 'styled-components';
import TrackChart from '../chart/TrackChart';

const Track = () => {
  return (
    <Container>
      <Title>
        <span>
          <span style={{ color: '#5198FF' }}>트랙</span> <span>전적</span>
        </span>
        <span style={{ fontSize: '13px' }}>
          <span>평균 상위 </span>
          <span style={{ color: '#5198FF' }}>7.03%</span>
        </span>
      </Title>
      <ChartTitle>
        <span>신화 신들의 세계</span> <span style={{ color: '#E6E6E6', fontWeight: 600 }}>기록분포</span>
      </ChartTitle>
      <TrackChart size={'200px'} />
    </Container>
  );
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
