<<<<<<< HEAD
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
=======
import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
>>>>>>> b4d569a0cd28edeb7ed3b23747e41e5db7a67837

const tabs = ['개인전', '팀전'];
function RankTab({ TabHandler, tabNum }) {
  return (
    <TabSection>
      <TabForm>
        {tabs.map((tab, index) => (
          <Btn key={index} onClick={() => TabHandler(index)} tabNum={tabNum === index}>
            {index === 0 ? (
              <FaUserAlt
                size={13}
                style={{
                  position: 'absolute',
                  top: 6,
                  left: 15,
                }}
              />
            ) : (
              <FaUsers
                size={20}
                style={{
                  position: 'absolute',
                  top: 3,
                  left: 15,
                }}
              />
            )}
            <span>{tab}</span>
          </Btn>
        ))}
      </TabForm>
    </TabSection>
  );
}

const TabSection = styled.div`
  display: flex;
  margin-top: 30px;
`;
const TabForm = styled.ul`
  display: flex;
  align-items: center;
  span {
    margin-left: 20px;
    font-weight: 700;
  }
`;
const Btn = styled.li`
  position: relative;
  cursor: pointer;
  width: 100px;
  line-height: 30px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #fff;
  margin-left: 10px;
  color: ${(props) => props.tabNum && '#005fcc'};
  background-color: ${(props) => props.tabNum && '#fff'};
`;

export default RankTab;
