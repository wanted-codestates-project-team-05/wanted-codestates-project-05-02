import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export const SearchInput = (props) => {
  const { customWidth, customHeight } = props;
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();
  const findUser = (nickName) => {
    navigate(`/user?nick=${nickName}&matchType=indi`);
    setInputValue('');
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container width={customWidth} height={customHeight}>
      <input className="input-style" placeholder="닉네임 검색" onChange={handleOnChange} />
      <IconContainer onClick={() => findUser(inputValue)}>
        <BiSearchAlt2 />
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  width: ${(props) => (props.customWidth ? props.customWidth : '200px')};
  height: ${(props) => (props.customHeight ? props.customHeight : '35px')};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-flex;
  align-items: center;
  transition: 0.5s;
  @media all and (max-width: 420px) {
    width: 90%;
  }

  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }

  &:focus-within {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }

  .input-style {
    width: 90%;
    height: 80%;
    color: #fff;
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    padding-left: 10px;
    ::placeholder {
      color: #fff;
      opacity: 0.5;
    }

    &:focus {
      outline: none;
    }
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.5);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
