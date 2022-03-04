import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Track from '../components/homepage/Track';
import Rank from '../components/homepage/Rank';
import Total from '../components/homepage/Total';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchList, fetchUserMatchList } from '../Reducer/matchList';
import { fetchMatchDetail } from '../Reducer/matchDetail';
import axios from 'axios';

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

function HomePage() {
  // const matchList = useSelector((state) => state.matchList);
  // const matchDetail = useSelector((state) => state.matchDetail);
  // const dispatch = useDispatch();
  // const handleGetMatchList = async () => {
  //   await dispatch(fetchUserMatchList(1963163935));
  //   await dispatch(fetchMatchList('soloData'));
  //   await dispatch(fetchMatchList('teamData'));
  //   await dispatch(fetchMatchDetail('00b2000b40fdff27'));
  //   console.log(matchList.userMatchList.data.matches[0].matches[1].player.matchRank);
  // };

  const [loading, setLoading] = useState(false);
  const [win, setWin] = useState();
  const [retired, setRetired] = useState();
  const [match, setMatch] = useState([]);
  const [avr, setAvr] = useState();

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
        const tempArr2 = res.data.matches[0].matches.filter((data) => data.player.matchRetired === '1');
        const tempArr3 = res.data.matches[0].matches
          .filter((data) => +data.player.matchRank <= 8)
          .map((data) => +data.player.matchRank)
          .filter((data) => data > 0);
        // console.log(res.data.matches[0].matches.map((data) => (data.player.matchWin === '1' ? (winCount += 1) : '')));
        setWin(tempArr.length);
        setRetired(tempArr2.length);
        setMatch(tempArr3);
        // console.log(win);
        // console.log(retired);
        // console.log(tempArr3);
        const totals = tempArr3.reduce((sum, curVal) => {
          return sum + curVal;
        });
        setAvr((totals / tempArr3.length).toFixed(2));
      })
      .catch((err) => console.profile(err));
  }, []);

  return (
    <>
      <DataContainer>
        <Total winCount={win} retired={retired} />
        <Rank match={match} avr={avr} />
        <Track />
      </DataContainer>
    </>
  );
}

export default HomePage;

const DataContainer = styled.div`
  width: 1000px;
  height: 265px;
  display: flex;
  justify-content: space-between;
`;
