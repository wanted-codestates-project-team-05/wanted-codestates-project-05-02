import React, { useState } from 'react';
import styled from 'styled-components';
import KartTable from './KartTable';
import TrackTable from './TrackTable';

const TabButton = () => {
  const [tab, setTab] = useState('track');
  return (
    <>
      <div>
        <ul>
          <Li tab={tab === 'track'}>
            <div>
              <Span tab={tab === 'track'} onClick={() => setTab('track')}>
                트랙
              </Span>
            </div>
          </Li>
          <Li tab={tab === 'kart'}>
            <div>
              <Span tab={tab === 'kart'} onClick={() => setTab('kart')}>
                카트
              </Span>
            </div>
          </Li>
        </ul>
      </div>
      {tab === 'track' ? <TrackTable /> : <KartTable />}
    </>
  );
};

export default TabButton;

const Li = styled.li`
  float: left;

  background-color: ${(props) => (props.tab ? '#fff' : '#ebebeb')};
  border-bottom: 2px solid ${(props) => (props.tab ? '#07f' : '#ebebeb')};
  & div {
    box-sizing: border-box;
    width: 116px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 14px;
  }
`;

const Span = styled.span`
  color: ${(props) => (props.tab ? '#07f' : '#a1a1a1')};
  cursor: pointer;
`;
