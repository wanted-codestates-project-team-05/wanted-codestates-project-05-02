import React from 'react';
import styled from 'styled-components';
import InfoContainer from '../components/UserInfoPage/InfoContainer';

function HomePage() {
  return (
    <Container>
      <Wrapper>
        <InfoContainer />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: #fafafa;
  padding-bottom: 100px;
  min-height: 800px;
`;

const Wrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding-top: 50px;
  background-color: transparent;
`;

export default HomePage;
