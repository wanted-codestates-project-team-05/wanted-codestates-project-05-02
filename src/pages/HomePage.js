import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Track from '../components/homepage/Track';
import Rank from '../components/homepage/Rank';
import Total from '../components/homepage/Total';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMatchList, fetchUserMatchList } from '../Reducer/matchList';
// import { fetchMatchDetail } from '../Reducer/matchDetail';
import axios from 'axios';
import CheerChat from '../components/UserInfoPage/CheerChat';

function HomePage({ userMatchList }) {
  useEffect(() => {
    const tempArr = userMatchList.filter((data) => data.player.matchWin === '1');
    const tempArr2 = userMatchList.filter((data) => data.player.matchRetired === '1');
    const tempArr3 = userMatchList
      .filter((data) => +data.player.matchRank <= 8)
      .map((data) => +data.player.matchRank)
      .filter((data) => data > 0);
    setWin(tempArr.length);
    setRetired(tempArr2.length);
    setMatch(tempArr3);
    const totals = tempArr3.reduce((sum, curVal) => {
      return sum + curVal;
    });
    setAvr((totals / tempArr3.length).toFixed(2));
    console.log(tempArr);
  }, []);
  const [loading, setLoading] = useState(false);
  const [win, setWin] = useState();
  const [retired, setRetired] = useState();
  const [match, setMatch] = useState([]);
  const [avr, setAvr] = useState();
  return (
    <>
      <DataContainer>
        <Total winCount={win} retired={retired} />
        <Rank match={match} avr={avr} />
        <CheerChat />
        {/*<InfoContainer />*/}
        {/*<Track />*/}
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
