import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = ({ firstTitle, secondTitle, des, children }) => {
  return (
    <Wrap>
      <TitleContainer>
        <BlueTitle>{firstTitle} </BlueTitle>
        {secondTitle}
        <Des>{des}</Des>
      </TitleContainer>
      {children}
    </Wrap>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  des: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.white};
  //임시
  width: 324px;
  height: 263px;
`;
const TitleContainer = styled.div`
  position: relative;
  margin: 0 12px;
  padding: 0 8px;
  font-size: 14px;
  line-height: 40px;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.color.conTour};
  color: ${({ theme }) => theme.color.black};
`;
const BlueTitle = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;
const Des = styled.p`
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 12px;
`;
