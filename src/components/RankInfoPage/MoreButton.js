import React, { useState } from 'react';
import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

export const MoreButton = (props) => {
  const { dataNum, setDataNum } = props;
  const [buttonLoading, setButtonLoading] = useState(true);
  const perContents = 30;

  const handleMoreButton = () => {
    setTimeout(() => {
      setButtonLoading(true);
      setDataNum(dataNum + perContents);
    }, 1000);
    setButtonLoading(false);
  };
  return (
    <Container onClick={handleMoreButton} loading={buttonLoading ? 'true' : 'false'}>
      {buttonLoading ? 'More' : <TailSpin color="#4b4b4b" height={30} width={30} />}
    </Container>
  );
};

const Container = styled.div`
  width: 9.375rem;
  height: 3.125rem;
  margin: 50px auto;
  background-color: ${(props) => (props.loading ? '#005fcc' : '#fff')};
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`;
