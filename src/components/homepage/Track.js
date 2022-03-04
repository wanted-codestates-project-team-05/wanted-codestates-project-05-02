import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import TrackChart from '../chart/TrackChart';

const date = new Date();
const startDate = new Date(+new Date(date.setHours(0, 0, 0, 0)) + 3240 * 10000)
  .toISOString()
  .replace('T', '')
  .replace(/\..*/, '');
const endDate = new Date(+new Date(date.setHours(23, 59, 59, 999)) + 3240 * 10000)
  .toISOString()
  .replace('T', ' ')
  .replace(/\..*/, '');

const match_types = '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a';

const Track = () => {
  useEffect(async () => {
    const config = {
      method: 'get',
      url: `kart/v1.0/users/1963163935/matches?start_date=${startDate}&end_date=${endDate}&limit=200&match_types=${match_types}`,
      headers: {
        Authorization: process.env.REACT_APP_NEXON_AUTHORIZATION,
      },
    };
    axios(config)
      .then((res) => {
        const tempArr = res.data.matches[0].matches.filter((data) => data.player.matchWin === '1');
      })
      .catch((err) => console.log(err));
  }, []);

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
