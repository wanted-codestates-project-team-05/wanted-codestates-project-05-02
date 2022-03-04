import React, { useState } from 'react';
import styled from 'styled-components';
import { MoreButton } from './MoreButton';

function RankList({ indiDatas, teamDatas, tabNum }) {
  const [indiNum, setIndiNum] = useState(30);
  const [TeamNum, setTeamNum] = useState(30);
  return (
    <Ranklist>
      <li>
        <div className="title">
          <span className="number">#</span>
          <span className="characterName">닉네임(순위변동)</span>
          <span className="score">누적포인트</span>
          <span className="count">주행횟수</span>
          <span className="rankSum">평균순위</span>
        </div>
      </li>
      {/* tabNum === 0 개인 , tabNum === 1 Group */}
      {tabNum === 0
        ? indiDatas
            .filter((data, index) => index < indiNum)
            .slice(3)
            .map((user, index) => (
              <li key={index}>
                <div>
                  <span className="number">{index + 4}</span>
                  <span className="characterName">{user.characterName}</span>
                  <span className="score">{user.score} PT</span>
                  <span className="count">{user.count} 회</span>
                  <span className="rankSum">{user.rankSum / user.count} 위</span>
                </div>
              </li>
            ))
        : teamDatas
            .filter((data, index) => index < TeamNum)
            .slice(3)
            .map((user, index) => (
              <li key={index}>
                <div>
                  <span className="number">{index + 4}</span>
                  <span className="characterName">{user.characterName}</span>
                  <span className="score">{user.score} PT</span>
                  <span className="count">{user.count} 회</span>
                  <span className="rankSum">{user.rankSum} 위</span>
                </div>
              </li>
            ))}

      {tabNum === 0 ? (
        <MoreButton dataNum={indiNum} setDataNum={setIndiNum} />
      ) : (
        <MoreButton dataNum={TeamNum} setDataNum={setTeamNum} />
      )}
    </Ranklist>
  );
}

const Ranklist = styled.ul`
  position: absolute;
  top: 600px;
  max-width: 62.5rem;
  width: 80%;
  @media screen and (max-width: 420px) {
    width: 100%;
    top: 1150px;
  }
  & > li:not(:nth-child(1)) {
    background-color: white;
  }
  & > li {
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
    &:not(:nth-child(1)) {
      border: 1px solid white;
    }
    &:hover:not(:nth-child(1)) {
      transition: all 0.5s;
      border: 1px solid #005fcc;
      color: #005fcc;
    }
    .title {
      color: #fff;
      @media screen and (max-width: 420px) {
        color: black;
      }
    }
    & > div {
      padding-left: 60px;
      line-height: 40px;
      height: 40px;
      font-weight: 600;
      font-size: 14px;
      & > span {
        display: inline-block;
      }
      .number {
        vertical-align: middle;
        @media screen and (max-width: 420px) {
          position: absolute;
          left: 10px;
        }
      }
      .characterName {
        position: absolute;
        left: 220px;
        @media screen and (max-width: 820px) {
          left: 120px;
        }
        @media screen and (max-width: 420px) {
          left: 30px;
        }
      }
      .score {
        display: inline-block;
        width: 200px;
        position: absolute;
        right: 300px;
        text-align: center;
        @media screen and (max-width: 820px) {
          right: 140px;
        }
        @media screen and (max-width: 420px) {
          width: 90px;
          right: 160px;
        }
      }
      .count {
        position: absolute;
        right: 180px;
        @media screen and (max-width: 820px) {
          right: 140px;
        }
        @media screen and (max-width: 420px) {
          right: 95px;
        }
      }
      .rankSum {
        position: absolute;
        right: 60px;
        @media screen and (max-width: 420px) {
          right: 20px;
        }
      }
    }
  }
`;

export default RankList;
