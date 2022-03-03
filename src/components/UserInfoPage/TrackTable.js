import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import trackData from '../../assets/track.json';
import timeConvert from '../../lib/timeConvert';

export default function TrackTable({ userData, matchData }) {
  const [trackInfo, setTrackInfo] = useState();
  const [current, setCurrent] = useState('');

  useEffect(() => {
    if (matchData.nickName) {
      const result = matchData.matches[0].matches.map((item) => item.trackId);
      const trackId = Array.from(new Set(result));
      const info = trackId.map((id) => {
        const arr = matchData.matches[0].matches.filter((match) => match.trackId === id);
        const trackName = trackData.find((item) => item.id === id);
        return {
          id,
          win: arr.filter((match) => match.matchResult === '1').length,
          count: arr.length,
          record: arr.map((match) => Number(match.player.matchTime)),
          trackN: trackName.name,
        };
      });
      setTrackInfo(info.sort((a, b) => compare(a.count, b.count)));
    }
  }, [matchData]);

  function compare(a, b) {
    if (Number(a) > Number(b)) {
      return -1;
    }
    if (Number(a) < Number(b)) {
      return +1;
    }
    return 0;
  }

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <H5>
          <span>트랙</span> 전적
        </H5>
        <P>
          평균 상위 <span>??</span>&nbsp;%
        </P>
        <Div>
          <p>
            {current || trackInfo?.[0].trackN} <span>기록분포</span>
          </p>
          {/* 변경부분 */}
          <div>graph</div>
        </Div>
      </div>
      <TableWrapper>
        <Table>
          <Thead>
            <HeadTr>
              <Th>선택</Th>
              <Th>트랙</Th>
              <Th>횟수</Th>
              <Th>승률</Th>
              <Th>기록</Th>
              <Th>상위</Th>
            </HeadTr>
          </Thead>
          <Tbody>
            {trackInfo?.map((track, idx) => (
              <TableBody
                track={track}
                key={idx}
                index={idx}
                setName={setCurrent}
                name={current || trackInfo?.[0].trackN}
              />
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}

function TableBody({ track, setName, name, index }) {
  const [record, setRecord] = useState();

  useEffect(() => {
    if (track) {
      const arr = track.record.filter((item) => item !== 0);
      if (arr.length !== 0) {
        setRecord(arr);
      } else {
        setRecord([0]);
      }
    }
  }, [track]);

  return (
    <>
      <BodyTr selected={track.trackN === name}>
        <td>
          <Input
            type={'radio'}
            name={'check'}
            value={track.trackN}
            defaultChecked={index === 0}
            onChange={(e) => setName(e.target.value)}
          />
        </td>
        <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
          <A>
            <img
              alt=""
              src={'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/village_1.png'}
            />{' '}
            {track?.trackN}
          </A>
        </td>
        <td>{track?.count}</td>
        <td>{`${Math.round((track.win / track.count) * 100)}%`}</td>
        <td>{timeConvert(Math.min.apply(null, record))}</td>
        <td>???</td>
      </BodyTr>
    </>
  );
}

const Container = styled.div`
  border: 1px solid #f2f2f2;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
  margin: 0 25px 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  & p {
    color: #1f334a;
    font-size: 14px;
  }
  & span {
    color: #a1a1a1;
  }
  & div {
    margin: 10px 0;
    text-align: center;
    width: 378px;
    height: 258px;
    border: 1px solid black;
  }
`;

const H5 = styled.div`
  position: relative;
  display: flex;
  padding: 0 8px;
  margin: 15px 20px 0px 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #1f334a;
  vertical-align: middle;
  & span {
    margin-right: 5px;
    font-size: 14px;
    color: #07f;
  }
`;

const P = styled.p`
  position: absolute;
  top: 26px;
  right: 28px;
  font-size: 12px;
  font-weight: 500;
`;

const TableWrapper = styled.div`
  overflow-y: auto;
  height: 235px;
  text-align: center;
  border-top: 1px solid #f2f2f2;
  font-weight: 400;
`;

const Table = styled.table`
  box-sizing: border-box;
  width: calc(100% - 1px);
  font-size: 13px;
  line-height: 35px;
  border-collapse: collapse;
  border-spacing: 0;
`;

const Thead = styled.thead`
  background-color: #fbfbfb;
`;

const HeadTr = styled.tr`
  box-sizing: border-box;
<<<<<<< HEAD
  th:not(:last-child)::after {
=======
  & th:not(:last-child)::after {
>>>>>>> ca02296c (Design: userinfopage default design)
    content: '';
    position: absolute;
    top: 10px;
    right: 0;
    display: inline-block;
    width: 1px;
    height: 15px;
    background-color: #ccc;
  }
`;

const BodyTr = styled.tr`
<<<<<<< HEAD
  ${({ selected }) => (selected ? 'border: 1px solid #07f' : '')};
=======
  border: ${(props) => (props.active ? `${'1px solid #07f'}` : '')};
>>>>>>> ca02296c (Design: userinfopage default design)
`;

const Th = styled.th`
  position: relative;
  font-weight: bold;
`;

const Tbody = styled.tbody`
  line-height: 45px;
`;

const Input = styled.input`
  box-sizing: border-box;
  vertical-align: middle;
`;

const A = styled.a`
  text-decoration: none;
  color: #1f334a;
  cursor: pointer;
<<<<<<< HEAD
  img {
=======
  & img {
>>>>>>> ca02296c (Design: userinfopage default design)
    height: 27px;
    vertical-align: middle;
  }
`;
