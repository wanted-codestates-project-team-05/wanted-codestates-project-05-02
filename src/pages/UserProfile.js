
import QueryString from 'qs';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import styled from 'styled-components';
import { FaInfoCircle, FaUser, FaUsers, FaRedo, FaBell, FaShareAlt, FaEye } from 'react-icons/fa';
<<<<<<< HEAD:src/pages/UserProfile.js
import CharterInfo from '../assets/character.json';
=======
>>>>>>> 834abb53 (feat: 모달 확인시 모달 전부 사라지게 하는 기능 구현, style: 페이지 뷰 호버 시 크기 커짐, 유저 캐릭터 호버시 캡션 보여짐):src/components/userInfoPage/UserProfile.js
import ModalUserReport from './ModalUserReport';
import UserMatch from './UserMatch';
import ModalShare from './ModalShare';
import characterName from'../../assets/character.json' 

const UserProfile = () => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const nickName = queryData.nick;
  const matchType = queryData.matchType;
  const navigate = useNavigate();

  // 캐릭터 이미지 값 하드코딩 한 부분입니다.
  // char 위치에 있는 값이 필요합니다.
  // char 값을 넣어서 최종 url을 img src에 넣고 있습니다.
  // char 값으로 charachter.json 에서 해당 id가 있으면 캐릭터 이름을 가지고 와서 img alt값 넣어주고
  // 캡션에도 사용하고 있습니다
  const char = '42c729e64e31aea803e4881432f7b95129ce97535c29e4f9a72919a9f267b418';
  const url = `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${char}.png`;
  //const char = matchList.userMatchList.data.matches[0].matches[0].character;
  const charName = characterName.find((el) => el.id === char ? el : '캐릭터');
  console.log(charName.name);

  const [isReport, setIsReport] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const onClickMatchtype = (e) => {
    let name = e.target.name;
    let txt = e.target.textContent;
    let icon = e.target.nodeName;

    if (name === '개인전' || txt === '개인전' || icon === 'svg') {
      navigate('/user?nick=BBEESSTT&matchType=indi');
    } else if (name === '팀전' || txt === '팀전' || icon === 'path') { 
      navigate('/user?nick=BBEESSTT&matchType=team');
    }
  };
  
  const onClickTotalReset = () => {
    //handleGetMatchList();
  }
  
  return (
    <>
      <ProfileContainer>
        <div class="match-info">
          <FaInfoCircle size="13px" />
          <span>카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다.</span>
        </div>
        <ProfileInfo>
          <figure className="figure">
            <img src={url} alt={charName.name + '캐릭터'} className="user-img" />
            <figcaption className="hide">{charName.name}</figcaption>
          </figure>
          <div className="user-total">
            <div>
              <h1 className="user-nick">{nickName}</h1>
              <span></span>
            </div>
            <Ul className="match-type">
              <li>
                <button
                  onClick={onClickMatchtype}
                  name="개인전"
                  className={matchType === 'indi' ? 'match-type-btn left active' : 'match-type-btn left'}
                >
                  <FaUser size="12px" />
                  <span>개인전</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onClickMatchtype}
                  name="팀전"
                  className={matchType === 'team' ? 'match-type-btn right active' : 'match-type-btn right'}
                >
                  <FaUsers size="19px" />
                  <span>팀전</span>
                </button>
              </li>
              <li>
                <button className="other-btn" onClick={onClickTotalReset}>
                  <FaRedo size="11px" />
                  <span>전적갱신</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsReport(true);
                  }}
                  className="other-btn"
                >
                  <FaBell size="11px" />
                  <span>신고하기</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsShare(true);
                  }}
                  className="other-btn"
                >
                  <FaShareAlt size="11px" />
                  <span>공유하기</span>
                </button>
              </li>
            </Ul>
          </div>
          <div className="page-view">
            <FaEye size="14px" />
            <span>페이지뷰</span>
            <p>1,024</p>
          </div>
        </ProfileInfo>
        <UserMatch nick={nickName} />
      </ProfileContainer>
      {isReport && <ModalUserReport report={setIsReport} />}
      {isShare && <ModalShare share={setIsShare} />}
    </>
  );
};

const ProfileContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  .match-info {
    span {
      font-size: 12px;
    }
  }
`;

const ProfileInfo = styled.article`
  width: 1000px;
  height: 177px;
  display: flex;
  align-items: center;
  margin-top: 12px;
  background-image: url('/images/bg-profile.png');
  background-repeat: no-repeat;
  background-size: 1200px 200px;
  border: 1px solid #ededed;
  border-left: 4px solid #0077ff;
  box-sizing: border-box;
  .figure {
    position: relative;
    cursor: pointer;
    .hide {
      opacity: 0;
      transition: opacity ease 0.4s;
      position: absolute;
      z-index: 10;
      left: 50px;
      font-size: 14px;
    }
    &:hover {
      .hide {
        opacity: 1;
      }
    }
    .user-img {
      width: 164px;
      height: 123px;
      object-fit: cover;
    }
  }
  .user-total {
    flex: 3;
    margin-left: 16px;
    .user-nick {
      font-size: 45px;
      color: #1f334a;
      font-weight: 600;
    }
  }
  .page-view {
    flex: 1;
    text-align: center;
    color: #6c7a89;
    span {
      vertical-align: top;
      margin-left: 3px;
      font-size: 14px;
    }
    p {
      margin-top: 5px;
      font-size: 20px;
<<<<<<< HEAD:src/pages/UserProfile.js
=======
      transition: transform ease 0.4s;
      &:hover {
        transform: scale(1.1);
      }
>>>>>>> 834abb53 (feat: 모달 확인시 모달 전부 사라지게 하는 기능 구현, style: 페이지 뷰 호버 시 크기 커짐, 유저 캐릭터 호버시 캡션 보여짐):src/components/userInfoPage/UserProfile.js
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  margin-top: 20px;
  .match-type-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 27px;
    font-size: 12px;
    font-weight: 400;
    border: 1px solid #07f;
    color: #0077ff;
    span {
      margin-left: 6px;
    }
  }
  .match-type-btn.active {
    background: #07f;
    color: #fff;
  }
  .match-type-btn.left {
    border-radius: 5px 0 0 5px;
  }
  .match-type-btn.right {
    position: relative;
    margin-right: 31px;
    border-radius: 0 5px 5px 0;
    &::after {
      position: absolute;
      content: '';
      right: -16px;
      width: 1px;
      height: 15px;
      background-color: #ededed;
    }
  }
  .other-btn {
    width: 82px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1f334a;
    border-radius: 15px;
    font-size: 12px;
    &:first-of-type {
      margin-right: 10px;
    }
    span {
      margin-left: 3px;
    }
  }
`;

export default UserProfile;
