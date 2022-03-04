import styled from 'styled-components';

function RankTop({ tabNum, indiDatas, teamDatas }) {
  return (
    <Container>
      {/* tabNum === 0 개인 , tabNum === 1 Group */}
      {tabNum === 0
        ? indiDatas.slice(0, 3).map((user, index) => (
            <span className="wrapper" key={index}>
              <div className="section">
                {index === 0 && <Medal alt="" src="https://tmi.nexon.com/img/assets/icon_goldmedal.png" />}
                {index === 1 && <Medal alt="" src="https://tmi.nexon.com/img/assets/icon_silvermedal.png" />}
                {index === 2 && <Medal alt="" src="https://tmi.nexon.com/img/assets/icon_bronzemedal.png" />}
                <p className="characterName">{user.characterName}</p>
                <p className="rankSum">
                  순위 <span>{user.rankSum}</span>
                </p>
                <p className="score">
                  누적 포인트 <span>{user.score}</span>
                </p>
                <Character
                  alt=""
                  // 이미지 변경 해야 됨
                  // src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${char}.png"
                  src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/201c61527a04d85cd2de0dad75ab0878ee4125129e57aabe47b3d3ac06df8d67.png"
                />
              </div>
              <div className="section">
                <div>
                  <p>승률</p>
                  <p>리타이어율</p>
                </div>
                <div>
                  <span className="anni"></span>
                  <span className="anni"></span>
                </div>
              </div>
            </span>
          ))
        : teamDatas.slice(0, 3).map((user, index) => (
            <span className="wrapper" key={index}>
              <div className="section">
                {index === 0 && <Medal alt="" src="https://tmi.nexon.com/img/assets/icon_goldmedal.png" />}
                {index === 1 && <Medal alt="" src="https://tmi.nexon.com/img/assets/icon_silvermedal.png" />}
                {index === 2 && <Medal alt="" src="https://tmi.nexon.com/img/assets/icon_bronzemedal.png" />}
                <p className="characterName">{user.characterName}</p>
                <p className="rankSum">
                  순위 <span>{user.rankSum}</span>
                </p>
                <p className="score">
                  누적 포인트 <span>{user.score}</span>
                </p>
                <Character
                  alt=""
                  // 이미지 변경 해야 됨
                  // src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${char}.png"
                  src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/201c61527a04d85cd2de0dad75ab0878ee4125129e57aabe47b3d3ac06df8d67.png"
                />
              </div>
              <div className="section">
                <div>
                  <p>승률</p>
                  <p>리타이어율</p>
                </div>
                <div>
                  <span className="anni"></span>
                  <span className="anni"></span>
                </div>
              </div>
            </span>
          ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  @media screen and (max-width: 400px) {
    margin-top: 10px;
    flex-direction: column;
    height: auto;
  }
  .wrapper {
    border: 1px solid #fff;
    border-radius: 12px;
    width: 270px;
    height: 250px;
    &:not(:last-child) {
      margin-right: 50px;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
      margin: 20px 0;
      &:not(:last-child) {
        margin-right: 0px;
      }
    }
    .section {
      position: relative;
      width: 100%;
      height: 125px;
      background-image: url(https://tmi.nexon.com/img/background_flag_rank.png);
      border-radius: 10px 10px 0 0;
      border-bottom: 1.5px solid #005fcc;
      .characterName {
        padding-top: 40px;
        vertical-align: middle;
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: #07f;
      }
      .rankSum {
        margin-top: 10px;
      }
      &:nth-child(2) {
        border-radius: 0 0 10px 10px;
        background-color: #fff;
        & > div {
          display: flex;
          justify-content: center;
          align-items: center;
          & > p {
            margin-top: 5px;
            width: 40%;
            font-weight: bold;
            text-align: center;
            color: black;
          }
          & > span {
            margin-top: 5px;
            width: 50%;
            height: 80px;
          }
          & > span:nth-child(1) {
            position: relative;
            &::after {
              position: absolute;
              content: ' ';
              display: block;
              top: 5px;
              right: 0;
              width: 1px;
              height: 70px;
              background-color: #f2f2f2;
              border: none;
              opacity: 1;
            }
          }
        }
      }
      & > p {
        margin-left: 30px;
        color: black;
        font-size: 17px;
        & > span {
          font-weight: bolder;
        }
      }
    }
  }
`;
const Medal = styled.img`
  position: absolute;
  top: -10px;
  @media screen and (max-width: 820px) {
    width: 30px;
  }
`;
const Character = styled.img`
  position: absolute;
  top: 10px;
  right: -20px;
  width: 130px;
  @media screen and (max-width: 820px) {
    display: none;
  }
  @media screen and (max-width: 400px) {
    display: inline-block;
    margin-right: 30px;
  }
`;

export default RankTop;
