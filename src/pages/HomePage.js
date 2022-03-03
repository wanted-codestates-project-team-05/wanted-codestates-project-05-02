import React from 'react';
import styled from 'styled-components';
import Track from '../components/homepage/Track';
import Rank from '../components/homepage/Rank';
import Total from '../components/homepage/Total';

function HomePage() {
  return (
    <DataContainer>
      <Total />
      <Rank />
      {/* <Background /> */}
      <Track />
    </DataContainer>
  );
}

export default HomePage;

const DataContainer = styled.div`
  width: 1000px;
  height: 265px;
  display: flex;
  justify-content: space-between;
`;
