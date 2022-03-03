import React, { useState } from 'react';
import styled from 'styled-components';

export default function TrackTable() {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <H5>
          <span>트랙</span> 전적
        </H5>
        <P>
          평균 상위 <span>7.65</span>&nbsp;%
        </P>
        <Div>
          <p>
            빌리지 운명의 다리 <span>기록분포</span>
          </p>
          {/* 변경부분 */}
          <div></div>
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
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
          </Tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}

function TableBody() {
  const [active, setActive] = useState(false);

  return (
    <>
      <BodyTr active={active}>
        <td>
          <Input type={'radio'} name={'check'} />
        </td>
        <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
          <A>
            <img
              alt=""
              src={'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/village_1.png'}
            />{' '}
            빌리지 운명의 다리
          </A>
        </td>
        <td>12</td>
        <td>17%</td>
        <td>2'09'10</td>
        <td>10%</td>
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
    padding: 10px 0;
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
  border: ${(props) => (props.active ? `${'1px solid #07f'}` : '')};
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
  & img {
    height: 27px;
    vertical-align: middle;
  }
`;
