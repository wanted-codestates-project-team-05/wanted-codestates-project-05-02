import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import MatchDetail from './MatchDetail';
import trackData from '../../assets/track.json';
import kartData from '../../assets/kart.json';
import timeConvert from '../../lib/timeConvert';
import calcDateDiff from '../../lib/calcDateDiff';

export default function Match({ matchData, userData }) {
  const [show, setShow] = useState(false);
  const trackName = trackData.filter((item) => item.id === matchData.trackId);
  const kartName = kartData.filter((item) => item.id === matchData.player.kart);

  return (
    <Section>
      <Div matchRank={matchData.player.matchRank}>
        <TypeP>{calcDateDiff(matchData.endTime)}</TypeP>
        <ResultP matchRank={matchData.player.matchRank}>
          {matchData.matchResult === '' || matchData.player.matchRank === '99' ? (
            '#리타이어'
          ) : (
            <>
              <span>{`#${matchData.player.matchRank}`}</span>
              <span style={{ marginLeft: '5px', fontSize: '16px' }}>{`/${matchData.playerCount}`}</span>
            </>
          )}
        </ResultP>
        <TrackP>{trackName[0].name} &nbsp;</TrackP>
        <KartP>{kartName[0].name} &nbsp;</KartP>
        <TimeP>{timeConvert(matchData.player.matchTime)}</TimeP>
        <OpenP onClick={() => setShow((prev) => !prev)}>
          <Triangle />
        </OpenP>
      </Div>
      {show ? <MatchDetail userData={userData} matchData={matchData} /> : null}
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
`;

const Div = styled.div`
  position: relative;
  display: table;
  margin-bottom: 5px;
  width: 100%;
  height: 88px;
  font-size: 16px;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  ${({ matchRank }) =>
    matchRank === '1'
      ? `background-color: rgba(0,119,255,.05);
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;`
      : matchRank === '' || matchRank === '99'
      ? `background-color: rgba(246,36,89,.05);
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #f62459;`
      : `border-color: #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;
  background-color: #fff;`}
`;

const P = styled.p`
  display: table-cell;
  vertical-align: middle;
  width: 150px;
  height: 30px;
  color: #1f334a;
  letter-spacing: -1px;
`;

const TrackP = styled(P)`
  position: relative;
  font-weight: 400;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }
`;

const KartP = styled(P)`
  position: relative;
  font-weight: 400;
  text-align: center;
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }
`;

const TimeP = styled(P)`
  width: 100px;
  font-weight: 500;
  text-align: center;
`;

const ResultP = styled(P)`
  width: 260px;
  padding-left: 10px;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  text-align: left;
  ${({ matchRank }) =>
    matchRank === '1'
      ? `color: #07f;
      opacity: 1;`
      : matchRank === '' || matchRank === '99'
      ? `color: #f62459;
      opacity: 1;`
      : `opacity: 0.5`}
`;

const TypeP = styled(P)`
  width: 65px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

const OpenP = styled(P)`
  position: abolute;
  box-sizing: border-box;
  right: 0;
  width: 40px;
  height: 87px;
  font-weight: 400;
  text-align: center;
  border-left: 1px solid #ebebeb;
  &:hover {
    background-color: #ebebeb;
  }
`;

const Triangle = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  border-color: #a1a1a1 transparent transparent transparent;
`;
