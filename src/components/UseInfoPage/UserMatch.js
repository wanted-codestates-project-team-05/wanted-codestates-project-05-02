import styled from 'styled-components';

const UserMatch = (props) => {
  return (
    <Container>
      <p className="match-txt">1대 1매칭 시뮬레이터-'{props.nick}'와 가상대결을 펼쳐보세요.</p>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 45px;
  line-height: 45px;
  margin-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  animation: gradientBackground 20s ease infinite;
  background-size: 400% 400%;
  @keyframes gradientBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .match-txt {
    display: inline-block;
    color: #fff;
  }
`;

export default UserMatch;
