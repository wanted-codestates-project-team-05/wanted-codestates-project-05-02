import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import kartData from '../../assets/kart.json';
import trackData from '../../assets/track.json';
import timeConvert from '../../lib/timeConvert';

export default function KartTable({ matchData, userData }) {
  const [kartInfo, setKartInfo] = useState();
  const [current, setCurrent] = useState();
  const [records, setRecords] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    if (matchData.nickName) {
      const result = matchData.matches[0].matches.map((item) => item.player.kart);
      const KartId = Array.from(new Set(result));
      const info = KartId.map((id) => {
        const arr = matchData.matches[0].matches.filter((match) => match.player.kart === id);
        const kartName = kartData.find((item) => item.id === id);
        return {
          id,
          win: arr.filter((match) => match.matchResult === '1').length,
          count: arr.length,
          kartN: kartName?.name,
          retire: arr.filter((match) => match.player.matchRetired === '1').length,
        };
      });
      setKartInfo(info.sort((a, b) => compare(a.count, b.count)));
    }
  }, [matchData]);

  useEffect(() => {
    if (id) {
      const data = matchData.matches[0].matches.filter((match) => match.player.kart === id);
      const result = data.map((match) => {
        const track = trackData.find((track) => track.id === match.trackId);
        return {
          id: track.name,
          record: Number(match.player.matchTime),
        };
      });
      const retire = result.filter((item) => item.record === 0);
      const complete = result.filter((item) => item.record !== 0);
      setRecords(complete.sort((a, b) => compare(a.record, b.record, true)).concat(retire));
    } else if (kartInfo?.length) {
      const data = matchData.matches[0].matches.filter((match) => match.player.kart === kartInfo[0].id);
      const result = data.map((match) => {
        const track = trackData.find((track) => track.id === match.trackId);
        return {
          id: track.name,
          record: Number(match.player.matchTime),
        };
      });
      const retire = result.filter((item) => item.record === 0);
      const complete = result.filter((item) => item.record !== 0);
      setRecords(complete.sort((a, b) => compare(a.record, b.record, true)).concat(retire));
    }
  }, [id, kartInfo, matchData.matches]);

  useEffect(() => {
    console.log(records);
  }, [records]);

  function compare(a, b, reverse = false) {
    let x = reverse ? 1 : -1;
    let y = reverse ? -1 : 1;
    if (Number(a) > Number(b)) {
      return x;
    }
    if (Number(a) < Number(b)) {
      return y;
    }
    return 0;
  }

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <H5>
          <span>카트</span> 전적
        </H5>
        <Div>
          <p>
            <Badge>일반</Badge>
            {current || kartInfo?.[0].kartN}
          </p>
          <KartBox>
            <Thumbnail>
              <img
                src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${
                  id || kartInfo?.[0].id
                }.png?v=1646306934`}
                alt=""
              />
            </Thumbnail>
            <Record>
              <ul>
                {records?.map((record, idx) => {
                  if (idx < 4) {
                    return (
                      <Li key={idx}>
                        <img
                          src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png"
                          alt=""
                        />
                        <span>{record.id}</span>
                        <Span>{timeConvert(record.record)}</Span>
                      </Li>
                    );
                  }
                  return null;
                })}
              </ul>
            </Record>
          </KartBox>
        </Div>
      </div>
      <TableWrapper>
        <Table>
          <Thead>
            <HeadTr>
              <Th>선택</Th>
              <Th>카트</Th>
              <Th>횟수</Th>
              <Th>승률</Th>
              <Th>리타율</Th>
            </HeadTr>
          </Thead>
          <Tbody>
            {kartInfo?.map((kart, idx) => (
              <TableBody
                key={idx}
                kart={kart}
                index={idx}
                setName={setCurrent}
                name={current || kartInfo?.[0].kartN}
                setId={setId}
              />
            ))}
          </Tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}

function TableBody({ kart, setName, name, index, setId }) {
  return (
    <>
      <BodyTr selected={kart.kartN === name}>
        <td>
          <Input
            type={'radio'}
            name={'check'}
            value={kart.kartN}
            defaultChecked={index === 0}
            onChange={(e) => {
              setName(e.target.value);
              setId(kart.id);
            }}
          />
        </td>
        <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
          <A>
            <img
              src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${kart.id}.png?v=1646306934`}
              alt=""
            />{' '}
            {kart.kartN}
          </A>
        </td>
        <td>{kart.count}</td>
        <td>{`${Math.round((kart.win / kart.count) * 100)}%`}</td>
        <td>{`${Math.round((kart.retire / kart.count) * 100)}%`}</td>
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
  p {
    color: #1f334a;
    font-size: 14px;
  }
`;

const KartBox = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Thumbnail = styled.div`
  position: relative;
  flex: 4;
  text-align: center;
  line-height: 135px;
  border-right: 1px solid #ccc;
  img {
    height: 70px;
    vertical-align: middle;
  }
`;

const Record = styled.div`
  flex: 6;
`;

const Li = styled.li`
  position: relative;
  color: #1f334a;
  font-size: 14px;
  height: 33px;
  line-height: 33px;
  text-align: left;
  padding-left: 10px;

  img {
    height: 23px;
    vertical-align: middle;
  }

  span {
    vertical-align: middle;
    margin-left: 5px;
  }
`;

const Span = styled.span`
  position: absolute;
  right: 0;
  color: #1f334a;
  font-size: 13px;
  height: 33px;
  padding-top: 2px;
  line-height: 33px;
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

const Badge = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #1f334a;
  border-radius: 15px;
  color: #1f334a;
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
  & th:not(:last-child)::after {
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
  ${({ selected }) => (selected ? 'border: 1px solid #07f' : '')};
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
  img {
    height: 27px;
    vertical-align: middle;
  }
`;
