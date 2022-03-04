import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';


const ModalUrlTxt = (props) => {

  const onClickClose = () => {
    props.check(false);
    props.dune.share(false);
  };

  return (
    <>
      <ModalUrl>
        <ModalCheck>
          <div>
            <p className="modal-txt">URL이 복사되었습니다.</p>
          </div>
          <button onClick={onClickClose} className="modal-check-btn">
            확인
          </button>
        </ModalCheck>
      </ModalUrl>
    </>
  );
};

const ModalShare = (props) => {
  const FACEBOOKSHAREURL = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Ftmi.nexon.com%252Fkart%252Fuser%253Fnick%253DBBEESSTT%26matchType%3Dindi&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ko_KR';
  const [isUrl, setIsUrl] = useState(false);

  const onClickClose = () => {
    props.share(false);
  };

  const onClickShareBtn = (e) => { 
    if (
      e.target.className === 'share-icon-fb' ||
      e.target.textContent === '페이스북' ||
      e.target.className === 'share-li-btn-fb'
    ) {
      window.open(FACEBOOKSHAREURL, '_blank');
    } else if (
      e.target.className === 'share-icon-url' ||
      e.target.textContent === 'URL복사' ||
      e.target.className === 'share-li-btn-url'
    ) {
      setIsUrl(true);
    }
  }


  return (
    <>
      <Container>
        <Modal>
          <div>
            <p className="modal-tit">공유하기</p>
            <button onClick={onClickClose} className="modal-share-btn">
              <FaTimes size="12px" />
            </button>
          </div>
          <ul className="share-list">
            <li>
              <button onClick={onClickShareBtn} className="share-li-btn fb">
                <img src="/images/icon_fb.svg" alt="" className="share-icon-fb" />
                <span>페이스북</span>
              </button>
            </li>
            <li>
              <button onClick={onClickShareBtn} className="share-li-btn url">
                <img src="/images/icon_url.svg" alt="" className="share-icon-url" />
                <span>URL복사</span>
              </button>
            </li>
          </ul>
        </Modal>
      </Container>
      {isUrl && <ModalUrlTxt check={setIsUrl} dune={props}/>}
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
`;

const Modal = styled.div`
  position: absolute;
  top: 200px;
  left: calc(100% - 400px);
  width: 170px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  border-bottom: 3px solid #0077ff;
  box-shadow: 10px 10px 10px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  z-index: 10;
  .modal-tit {
    font-size: 14px;
    text-align: center;
  }
  .modal-share-btn {
    position: absolute;
    top: 7px;
    right: 10px;
  }
  .share-list {
    display: flex;
    justify-content: space-evenly;
    .share-li-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      font-size: 12px;
      .share-icon-fb,
      .share-icon-url {
        width: 42px;
        margin-bottom: 10px;
      }
      span {
        width: 42px;
        letter-spacing: -1px;
      }
    }
    .share-li-btn.fb {
      width: 42px;
      height: 70px;
    }
  }
`;

const ModalUrl = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.4);
  .modal-check-btn {
    width: 50px;
    height: 32px;
    margin-top: 15px;
    float: right;
    font-size: 12px;
    color: #fff;
    background-color: #07f;
  }
`;

const ModalCheck = styled.div`
  width: 348px;
  background-color: #fff;
  padding: 30px 24px 24px;
  box-sizing: border-box;
  border-bottom: 3px solid #07f;
`;

export default ModalShare;
