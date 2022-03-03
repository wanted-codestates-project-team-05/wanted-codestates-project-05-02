import styled from 'styled-components';
import RadialChart from '../chart/RadialChart';

const Background = (props) => {
  return (
    <Container>
      <Title>
        <span>
          <span style={{ color: 'blue' }}>종합</span> <span>전적</span>
        </span>

        <span style={{ fontSize: '13px' }}>200전 70승 130패</span>
      </Title>
      <ChartContainer>
        <div>
          <ChartTitle>승률</ChartTitle>
          <RadialChart color="#F44336" size="150px" />
        </div>
        <CenterChart>
          <ChartTitle>완주율</ChartTitle>
          <RadialChart color="#E91E63" size="150px" />
        </CenterChart>
        <div>
          <ChartTitle>리타이어율</ChartTitle>
          <RadialChart color="#9C27B0" size="150px" />
        </div>
      </ChartContainer>
      <Footer>
        <span>
          <span style={{ color: 'blue' }}>최다주행 </span>
          <span>모드</span>
        </span>

        <span style={{ fontSize: '20px', font: 'bold', fontWeight: '600' }}>통합</span>
      </Footer>
    </Container>
  );
};

export default Background;

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
  border-bottom: 1px gray solid;
`;

const ChartTitle = styled.div`
  padding-top: 5px;
  text-align: center;
`;

const CenterChart = styled.div`
  border-left: 1px gray solid;
  border-right: 1px gray solid;
`;

const ChartContainer = styled.div`
  display: flex;
  padding: 5px;
`;

const Footer = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
`;
