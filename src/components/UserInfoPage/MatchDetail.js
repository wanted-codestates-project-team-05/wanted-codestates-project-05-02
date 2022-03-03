import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import timeConvert from '../../lib/timeConvert';

export default function MatchDetail({ matchData, userData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [match, setMatch] = useState({});
  const navigate = useNavigate();
  let apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTE3NTcxODMwIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0NjI3ODA3NywiZXhwIjoxNjYxODMwMDc3LCJpYXQiOjE2NDYyNzgwNzd9.6zBFVMmC8McG1l_-k5YkKkaY3Grn12ZM_jFRMK8fkSY';

  function compare(a, b) {
    if (Number(a['matchRank']) > Number(b['matchRank'])) {
      return 1;
    }
    if (Number(a['matchRank']) < Number(b['matchRank'])) {
      return -1;
    }
    return 0;
  }

  const getMatch = async () => {
    setIsLoading(true);
    const matches = await axios.get(`/matches/${matchData.matchId}`, {
      headers: { Authorization: apiKey },
    });
    const length = matches.data.players.length;
    matches.data.players.forEach((item) => {
      if (item.matchRank === '0') {
        item.matchRank = '99';
      }
    });
    matches.data.players = matches.data.players.sort((a, b) => compare(a, b));
    if (length < 8) {
      const arr = Array.from({ length: 8 - length });
      matches.data.players = matches.data.players.concat(arr);
    }
    setMatch(matches.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMatch();
  }, []);

  if (isLoading) return null;
  return (
    <Container>
      <Wrapper>
        <Row>
          <Rank>#</Rank>
          <Kart>카트</Kart>
          <User>유저</User>
          <Record>기록</Record>
        </Row>
        {match?.players?.map((item, idx) => {
          if (item) {
            return (
              <Row>
                <Rank>
                  {item.matchRank === '99' || item.matchRank === '0' ? <span>리타이어</span> : item.matchRank}
                </Rank>
                <Kart>
                  <img
                    style={{ width: '70%' }}
                    alt=""
                    src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${item.kart}.png?v=1646306934`}
                    onError={(e) => (e.target.src = 'https://tmi.nexon.com/img/assets/empty_kart.png')}
                  />
                </Kart>
                <User
                  onClick={() =>
                    navigate({
                      pathname: '/user',
                      search: `?nick=${item.characterName}`,
                    })
                  }
                >
                  {item.characterName}
                </User>
                <Record>{timeConvert(item.matchTime)}</Record>
              </Row>
            );
          } else {
            return (
              <Row>
                <Rank>
                  <span>리타이어</span>
                </Rank>
                <Kart></Kart>
                <User></User>
                <Record>-</Record>
              </Row>
            );
          }
        })}
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
  span {
    color: red;
  }
`;

const Kart = styled.div`
  height: 78px;
  line-height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const User = styled.div`
  height: 17px;
  line-height: 17px;
`;

const Record = styled.div`
  height: 42px;
  line-height: 42px;
`;
