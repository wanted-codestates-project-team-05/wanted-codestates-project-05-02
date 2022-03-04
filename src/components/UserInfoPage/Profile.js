import QueryString from 'qs';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaInfoCircle, FaUser, FaUsers, FaRedo, FaBell, FaShareAlt, FaEye } from 'react-icons/fa';
import ModalUserReport from './ModalUserReport';
import UserMatch from './UserMatch';
import ModalShare from './ModalShare';
import characterName from '../../assets/character.json';

const Profile = ({ char }) => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const nickName = queryData.nick;
  const matchType = queryData.matchType;
  const navigate = useNavigate();
  const url = `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${char}.png`;
  const charName = characterName.find((el) => (el.id === char ? el : '캐릭터'));

  const [isReport, setIsReport] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const onClickMatchtype = (e) => {
    let name = e.target.name;
    let txt = e.target.textContent;
    let icon = e.target.nodeName;

    if (name === '개인전' || txt === '개인전' || icon === 'svg') {
      navigate(`/user?nick=${nickName}&matchType=indi`);
    } else if (name === '팀전' || txt === '팀전' || icon === 'path') {
      navigate(`/user?nick=${nickName}&matchType=team`);
    }
  };

  return (
    <>
      {isShare && <ModalShare share={setIsShare} />}
      <ProfileContainer>
        <div className="match-info">
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
                <button className="other-btn">
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
            <p className="view-num">1,024</p>
          </div>
        </ProfileInfo>
        <UserMatch nick={nickName} />
      </ProfileContainer>
      {isReport && <ModalUserReport report={setIsReport} />}
    </>
  );
};

const ProfileContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  .match-info {
    margin-top: 24px;
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
  margin-top: 16px;
  padding-top: 26px;
  background-image: url('/images/bg-profile.png');
  background-repeat: no-repeat;
  background-size: 1200px 200px;
  border: 1px solid #ededed;
  border-left: 4px solid #0077ff;
  box-sizing: border-box;
  .figure {
    position: relative;
    float: left;
    overflow: hidden;
    margin: 0 20px 20px 0;
    cursor: pointer;
    .hide {
      position: absolute;
      bottom: 5px;
      left: -20px;
      background: rgba(0, 0, 0, 0.75);
      color: white;
      padding: 5px 10px;
      font-size: 12px;
      opacity: 0;
      transition: all 0.6s ease;
      -webkit-transition: all 0.6s ease;
      -moz-transition: all 0.6s ease;
      -o-transition: all 0.6s ease;
    }
    &:hover {
      .hide {
        opacity: 1;
        left: 20px;
      }
    }
    &::before {
      content: '?';
      position: absolute;
      font-weight: 800;
      background: black;
      background: rgba(0, 0, 0, 0.4);
      text-shadow: 0 0 5px white;
      color: black;
      width: 20px;
      height: 20px;
      bottom: 5px;
      left: 20px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
      opacity: 0.75;
    }
    &:hover:before {
      opacity: 0;
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
    .view-num {
      margin-top: 5px;
      font-size: 20px;
      transition: color ease 0.4s;
      &:hover {
        color: #0077ff;
      }
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

export default Profile;
