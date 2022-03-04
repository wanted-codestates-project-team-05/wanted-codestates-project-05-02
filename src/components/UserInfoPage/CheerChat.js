import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardContainer from '../common/CardContainer';
import { queryForDocument, writeCheering } from '../../service/EditFirebaseDB';

const CheerChat = () => {
  const [cheers, setCheers] = useState([]);
  const [inputs, setInputs] = useState({
    nickname: '',
    oneWord: '',
  });
  const { nickname, oneWord } = inputs;
  const [todayDataCount, setTodayDataCount] = useState(0);
  const getData = async () => {
    const Cheers = [];
    await Promise.all(await queryForDocument()).then((res) => {
      res.map((item) => {
        const todayData = item.data === Today ? true : false;
        todayData && setTodayDataCount((todayData) => todayData + 1);
        Cheers.push(
          <SpeechContainer key={item.id}>
            <Nickname>{item.nickname}</Nickname>
            {todayData ? <MarkToday /> : null}
            <SpeechBubble>{item.oneWord}</SpeechBubble>
          </SpeechContainer>
        );
      });
    });
    setCheers(Cheers);
  };
  useEffect(() => {
    getData();
  }, []);
  const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
  };
  const Today = getToday();

  const AddCheer = async (nickname, oneWord) => {
    const cheeringId = Date.now();
    const docData = {
      data: Today,
      oneWord: oneWord,
      nickname: nickname,
    };
    await writeCheering(cheeringId, docData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oneWord !== '') {
      await AddCheer(nickname, oneWord);
      await getData();
      await deleteInput();
    } else return;
  };

  const deleteInput = () => {
    setInputs({
      ...inputs,
      oneWord: '',
    });
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value, // <- 변경 후
    });
  };

  return (
    <CardContainer firstTitle="응원" secondTitle="한마디" des={`오늘 ${todayDataCount}개 전체 ${cheers.length}개`}>
      <Content>{cheers.length !== 0 ? cheers : null}</Content>
      <Form onSubmit={handleSubmit}>
        <NicknameInput placeholder="닉네임" value={nickname} name="nickname" onChange={handleChange} />
        <WordInput placeholder="최대 30자" value={oneWord} name="oneWord" onChange={handleChange} />
        <Button>남기기</Button>
      </Form>
    </CardContainer>
  );
};
export default CheerChat;

const Content = styled.div`
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 159px;
  margin: 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

const SpeechContainer = styled.div`
  @keyframes move {
    0% {
      transform: translateX(70px);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: move 1.5s;
  margin: 6px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

const MarkToday = styled.div`
  background-color: ${({ theme }) => theme.color.red};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const SpeechBubble = styled.div`
  margin-left: 15px;
  position: relative;
  width: 210px;
  border: 1px solid #c3ced5;
  border-radius: 15px;
  padding: 13px 10px;
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    bottom: auto;
    left: -8px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent #c3ced5;
    display: block;
    width: 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 12px;
    bottom: auto;
    left: -7px;
    border-style: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent ${({ theme }) => theme.color.white};
    display: block;
    width: 0;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin: 10px 12px;
`;

const NicknameInput = styled.input`
  height: 16px;
  padding: 7px 5px;
  margin-right: 5px;
  vertical-align: middle;
  width: 15%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.conTour};
  font-size: 12px;
`;

const WordInput = styled.input`
  height: 16px;
  padding: 7px 5px;
  margin-right: 5px;
  vertical-align: middle;
  width: 55%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.conTour};
  font-size: 12px;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.conTour};
  background-color: ${({ theme }) => theme.color.conTour};
  color: ${({ theme }) => theme.color.white};
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
`;
