import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Track from '../components/homepage/Track';
import Rank from '../components/homepage/Rank';
import Total from '../components/homepage/Total';
import CheerChat from '../components/UserInfoPage/CheerChat';

function HomePage({ userMatchList }) {
  const [win, setWin] = useState();
  const [retired, setRetired] = useState();
  const [match50, setMatch50] = useState([]);
  // const [match200, setMatch200] = useState([]);
  const [avr50, setAvr50] = useState();
  const [avr200, setAvr200] = useState();
  useEffect(() => {
    const winArr = userMatchList.filter((data) => data.player.matchWin === '1');
    const retiredArr = userMatchList.filter((data) => data.player.matchRetired === '1');
    const matchArr50 = userMatchList
      .filter((data) => +data.player.matchRank <= 8)
      .map((data) => +data.player.matchRank)
      .filter((data) => data > 0)
      .filter((data, i) => i <= 50);
    const matchArr200 = userMatchList
      .filter((data) => +data.player.matchRank <= 8)
      .map((data) => +data.player.matchRank)
      .filter((data) => data > 0);
    setWin(winArr.length);
    setRetired(retiredArr.length);
    setMatch50(matchArr50);
    // setMatch200(match200);
    const totals50 = matchArr50.reduce((sum, curVal) => {
      return sum + curVal;
    });
    setAvr50((totals50 / matchArr50.length).toFixed(2));
    const totals200 = matchArr200.reduce((sum, curVal) => {
      return sum + curVal;
    });
    setAvr200((totals200 / matchArr200.length).toFixed(2));
  }, []);

  return (
    <>
      <DataContainer>
        <Total winCount={win} retired={retired} />
        <Rank match={match50} avr50={avr50} avr200={avr200} />
        <CheerChat />
      </DataContainer>
    </>
  );
}

export default HomePage;

const DataContainer = styled.div`
  margin: 20px 0;
  width: 1000px;
  height: 265px;
  display: flex;
  justify-content: space-between;
`;
