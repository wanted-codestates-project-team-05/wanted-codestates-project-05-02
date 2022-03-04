import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import RankTop from '../components/RankInfoPage/RankTop';
import RankTab from '../components/RankInfoPage/RankTab';
import RankList from '../components/RankInfoPage/RankList';
import { useNavigate } from 'react-router-dom';
import GuideModal from '../components/RankInfoPage/GuideModal';
import Loading from '../components/common/Loading';
import { RankIndiData } from '../components/RankIndiData';

function RankPage() {
  const indiDatas = RankIndiData();
  console.log(indiDatas.length);
  const navigate = useNavigate();
  const [tabNum, setTabNum] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const TabHandler = (index) => {
    setIsLoading(true);
    setTabNum(index);
    if (index === 0) navigate('/rank?mode=indi&speed=speedIndiCombine');
    else navigate('/rank?mode=team&speed=speedTeamCombine');
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
          <RankTop indiDatas={indiDatas} />
        </Banner>
      </Bannerbg>
      <RankList indiDatas={indiDatas} tabNum={tabNum} />
    </Container>
  );
}

const Container = styled.div`
  height: 200vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Bannerbg = styled.div`
  width: 100%;
  background-color: #005fcc;
  color: #fff;
`;
const Banner = styled.div`
  max-width: 62.5rem;
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
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
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export default RankPage;
