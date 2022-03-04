import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchList } from '../Reducer/matchList';
import axios from 'axios';

export const RankIndiData = () => {
  const [list, setList] = useState([]);
  const [playerList, setPlayerList] = useState([]);
  const [playerMap, setPlayerMap] = useState([]);
  const dispatch = useDispatch();
  const matchList = useSelector((state) => state.matchList.matchList.soloData?.matches[0].matches);

  const getData = async () => {
    await dispatch(fetchMatchList('soloData'));
  };

  const getDetailData = async () => {
    const playerArray = [];
    if (list !== undefined) {
      await Promise.all(
        list?.map(async (match) => {
          await axios
            .get(`https://server-cors-wanted.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/matches/${match}`, {
              headers: {
                Authorization: process.env.REACT_APP_NEXON_AUTHORIZATION,
              },
            })
            .then((res) => {
              res.data?.players.map((item) => {
                playerArray.push({
                  characterName: item.characterName,
                  character: item.character,
                  matchRank: item.matchRank,
                });
              });
            });
          // console.log(matchDetailLoading)
        })
      );
    }
    // console.log(responseDataList);
    setPlayerList(playerArray);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setList(matchList);
  }, [matchList]);

  useEffect(() => {
    getDetailData();
  }, [list, matchList]);

  //playerData 한번에 넘겨줘야함
  const setting = (playerData) => {
    let arr = [];
    playerData.map((item) => {
      let characterName = item.characterName;
      let score;
      let count = 0;

      if (item.matchRank === '1') {
        score = 10;
      } else if (item.matchRank === '2') {
        score = 7;
      } else if (item.matchRank === '3') {
        score = 5;
      } else if (item.matchRank === '4') {
        score = 4;
      } else if (item.matchRank === '5') {
        score = 3;
      } else if (item.matchRank === '6') {
        score = 1;
      } else if (item.matchRank === '7') {
        score = 0;
      } else if (item.matchRank === '8') {
        score = -1;
      } else {
        score = -5;
      }

      //플레이어가 존재하면 score를 원래잇던 플레이어에게 덮어씌운다.
      if (arr.find((findItem) => findItem.characterName === characterName)) {
        const indexValue = arr.findIndex((findIndexItem) => findIndexItem.characterName === characterName);
        arr[indexValue].score += score;
        arr[indexValue].count++;
        arr[indexValue].rankSum += parseInt(item.matchRank === '99' || item.matchRank === '0' ? '8' : item.matchRank);
      } else {
        arr.push({
          characterName,
          score,
          character: item.character,
          count: count + 1,
          rankSum: parseInt(item.matchRank === '99' || item.matchRank === '0' ? '8' : item.matchRank),
        });
      }
    });
    setPlayerMap(arr);
  };

  useEffect(() => {
    setting(playerList);
  }, [playerList]);

  return playerMap.sort((a, b) => b.score - a.score);
};
