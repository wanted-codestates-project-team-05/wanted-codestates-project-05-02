import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankChart from '../chart/RankChart';
import CardContainer from '../common/CardContainer';

const matchUrl = 'pi/kart/v1.0/matches/1963163935';
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

const Rank = (props) => {
  const [loading, setLoading] = useState(false);
  const [win, setWin] = useState();
  const [totals, setTotals] = useState([]);

  let winCount;
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
        setWin(tempArr.length);
      })
      .catch((err) => console.profile(err));
  }, []);

  return (
    <CardContainer>
      <Container>
        <Title>
          <span>
            <span style={{ color: '#5198FF' }}>순위변동 </span>
            <span>추이</span>
          </span>
          <span style={{ fontSize: '11px' }}>
            <span>지난 200경기 </span>
            <span style={{ color: '#5198FF' }}>{props.avr200}위 </span>
            <span>최근 50경기 </span>
            <span style={{ color: '#5198FF' }}>{props.avr50}위</span>
          </span>
        </Title>
        <RankChart match={props.match} size={'230px'} />
      </Container>
    </CardContainer>
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
  padding-bottom: 15px;
  font-size: 15px;
  justify-content: space-between;
  border-bottom: 1px #e6e6e6 solid;
`;
