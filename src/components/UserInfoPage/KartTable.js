import React, { useState } from 'react';
import styled from 'styled-components';

export default function KartTable() {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <H5>
          <span>카트</span> 전적
        </H5>
        <Div>
          <p>
            <Badge>일반</Badge>
            몬스터X LE
          </p>
          <KartBox>
            <Thumbnail>
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/0b41bf8620b5851d7dcc7eb33765d506e530b8d2e612e6c60823f2b890da3401.png?v=1646306934"
                alt=""
              />
            </Thumbnail>
            <Record>
              <ul>
                <li>
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png"
                    alt=""
                  />
                  <span>코리아 제주 해오름</span>
                  <span>1'03'14</span>
                </li>
                <li>
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png"
                    alt=""
                  />
                  <span>코리아 제주 해오름</span>
                  <span>1'03'14</span>
                </li>
                <li>
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png"
                    alt=""
                  />
                  <span>코리아 제주 해오름</span>
                  <span>1'03'14</span>
                </li>
                <li>
                  <img
                    src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png"
                    alt=""
                  />
                  <span>코리아 제주 해오름</span>
                  <span>1'03'14</span>
                </li>
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
              src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/0b41bf8620b5851d7dcc7eb33765d506e530b8d2e612e6c60823f2b890da3401.png?v=1646306934"
              alt=""
            />{' '}
            몬스터X LE
          </A>
        </td>
        <td>188</td>
        <td>32%</td>
        <td>6%</td>
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

  li {
    position: relative;
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
  img {
    height: 27px;
    vertical-align: middle;
  }
`;
