import styled from 'styled-components';
import RankChart from '../chart/RankChart';

const Rank = () => {
  return (
    <Container>
      <Title>
        <span>
          <span style={{ color: '#5198FF' }}>순위변동 </span>
          <span>추이</span>
        </span>
        <span style={{ fontSize: '11px' }}>
          <span>지난 200경기 </span>
          <span style={{ color: '#5198FF' }}>2.92위 </span>
          <span>최근 50경기 </span>
          <span style={{ color: '#5198FF' }}>3.14위</span>
        </span>
      </Title>
      <RankChart size={'200px'} />
    </Container>
  );
};

export default Rank;

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
