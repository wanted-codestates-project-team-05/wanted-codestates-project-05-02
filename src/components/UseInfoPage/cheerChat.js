import React from 'react';
import styled from 'styled-components';
import CardContainer from '../common/CardContainer';

const CheerChat = () => {
  return (
    <CardContainer firstTitle="응원" secondTitle="한마디" des="오늘 6개 전체 13개">
      <Content>
        <SpeechContainer>
          <NickName>234</NickName>
          <MarkToday />
          <SpeechBubble>3434</SpeechBubble>
        </SpeechContainer>
      </Content>
      <Form>
        <NickNameInput placeholder="닉네임" />
        <WordInput placeholder="최대 30자" />
        <Button>남기기</Button>
      </Form>
    </CardContainer>
  );
};

export default CheerChat;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 159px;
  margin: 10px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

const SpeechContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 12px;
  font-weight: 600;
`;

const NickName = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

const MarkToday = styled.div`
  background-color: ${({ theme }) => theme.color.red};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const SpeechBubble = styled.div`
  position: relative;
  width: 210px;
  border: 1px solid #c3ced5;
  border-radius: 15px;
  padding: 15px 10px;
  &::before {
    content: '';
    position: absolute;
    top: 14px;
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
    top: 14px;
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

const NickNameInput = styled.input`
  padding-bottom: 5px;
  margin-right: 5px;
  vertical-align: middle;
  width: 15%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.conTour};
  font-size: 12px;
`;

const WordInput = styled.input`
  padding-bottom: 5px;
  margin-right: 5px;
  vertical-align: middle;
  width: 60%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.conTour};
  font-size: 12px;
`;

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.color.conTour};
  background-color: ${({ theme }) => theme.color.conTour};
  color: ${({ theme }) => theme.color.white};
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
`;
