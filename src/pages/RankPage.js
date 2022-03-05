import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankTop from '../components/RankInfoPage/RankTop';
import RankTab from '../components/RankInfoPage/RankTab';
import RankList from '../components/RankInfoPage/RankList';
import { useNavigate } from 'react-router-dom';
import GuideModal from '../components/RankInfoPage/GuideModal';
import Loading from '../components/common/Loading';
import { RankIndiData } from '../components/RankIndiData';
import { MoreButton } from '../components/RankInfoPage/MoreButton';
import { datas } from '../components/RankInfoPage/FakeData';
import Wave from 'react-wavify';

function RankPage() {
  const indiDatas = RankIndiData();
  const navigate = useNavigate();
  const [tabNum, setTabNum] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (indiDatas.length !== 0) {
  //     setIsLoading(false);
  //   }
  // }, [indiDatas]);
  const TabHandler = (index) => {
    setIsLoading(true);
    setTabNum(index);
    if (index === 0) navigate('/rank?mode=indi&speed=speedIndiCombine');
    else navigate('/rank?mode=team&speed=speedTeamCombine');

    setIsLoading(false);
  };
  const ModalHanlder = () => {
    setIsModal((prev) => !prev);
  };
  if (isLoading) return <Loading message={'데이터를 불러오는 중입니다.'} />;
  return (
    <Container isModal={isModal}>
      {isModal && <GuideModal isModal={isModal} ModalHanlder={ModalHanlder} />}
      <Bannerbg>
        <Banner>
          <PageName>3월 TMI 랭킹</PageName>
          <Line></Line>
          <Info>
            <div>
              <Sub>랭킹 산정기간2022년 02월 21일 00:00:00 ~ 2022년 02월 27일 24:00:00</Sub>
              <Sub>최근 업데이트2022년 02월 28일 11:07:30</Sub>
            </div>
            <GuideBtn onClick={ModalHanlder}>랭킹 가이드</GuideBtn>
          </Info>
          <RankTab tabNum={tabNum} TabHandler={TabHandler} />
          <RankTop tabNum={tabNum} indiDatas={indiDatas} teamDatas={datas} />
        </Banner>
        <Wave
          fill="#2e80db"
          style={{ position: 'absolute', bottom: -1, left: 0, opacity: 0.7 }}
          paused={false}
          options={{
            height: 80,
            amplitude: 20,
            speed: 0.15,
            points: 4,
          }}
        />
        <Wave
          fill="#2861a1"
          style={{ position: 'absolute', bottom: -1, left: 0, opacity: 0.6 }}
          paused={false}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.3,
            points: 3,
          }}
        />
        <Wave
          fill="#1e6fc9"
          style={{ position: 'absolute', bottom: -1, left: 0, opacity: 0.4 }}
          paused={false}
          options={{
            height: 2 > 3 ? 50 : 20,
            amplitude: 50,
            speed: 0.2,
            points: 2,
          }}
        />
      </Bannerbg>
      <RankList tabNum={tabNum} indiDatas={indiDatas} teamDatas={datas} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Bannerbg = styled.div`
  width: 100%;
  background-color: #005fcc;
  position: relative;
  color: #fff;
  z-index: 5;
`;
const Banner = styled.div`
  max-width: 62.5rem;
  width: 80%;
  margin: 0 auto;
  padding: 50px;
`;
const PageName = styled.h1`
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  margin-bottom: 10px;
`;
const Line = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 35px;
  height: 3px;
  background-color: #fff;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
`;
const Sub = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  color: #fff;
`;
const GuideBtn = styled.button`
  margin-right: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  background-color: #005fcc;
  font-size: 12px;
  font-weight: 500;
  height: 30px;
  cursor: pointer;
  &:hover {
    color: #005fcc;
    background-color: #fff;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export default RankPage;
