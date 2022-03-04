import { useState } from 'react';
import styled from 'styled-components';

const ModalTxt = (props) => {
  const onClickClose = () => {
    props.none(true);
    props.dune.report(false);
  };

  return (
    <>
      <ModalNone>
        <Modal>
          <div>
            <p className="modal-txt">신고 접수가 되었습니다.</p>
          </div>
          <button onClick={onClickClose} className="modal-check-btn">
            확인
          </button>
        </Modal>
      </ModalNone>
    </>
  );
};

const ModalNoTxt = (props) => {
  const onClickClose = () => {
    props.none(true);
  };

  return (
    <>
      <ModalNone>
        <Modal>
          <div>
            <p className="modal-tit">확인</p>
            <p className="modal-txt">신고사유를 입력해주세요.</p>
          </div>
          <button onClick={onClickClose} className="modal-check-btn">
            확인
          </button>
        </Modal>
      </ModalNone>
    </>
  );
};

const ModalUserReport = (props) => {
  const [textArea, setTextArea] = useState('');
  const [isTxt, setIsTxt] = useState(true);

  const onClickClose = () => {
    props.report(false);
  };

  const saveReport = () => {
    if (textArea === '') {
      setIsTxt(false);
    } else {
      setIsTxt(false);
    }
  };

  const createTxt = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <ModalReport>
      <Modal>
        <div>
          <p className="modal-tit">유저신고</p>
          <p className="modal-txt">
            해당 유저를 신고하시겠습니까? <br />
            신고하시려면 사유를 입력해주세요.
          </p>
        </div>
        <textarea value={textArea} onChange={createTxt} className="modal-textarea"></textarea>
        <div className="modal-btn-box">
          <button onClick={onClickClose} className="modal-btn">
            아니요
          </button>
          <button onClick={saveReport} className="modal-btn">
            네
          </button>
        </div>
      </Modal>
      {!isTxt && textArea.length === 0 && <ModalNoTxt none={setIsTxt} />}
      {textArea.length !== 0 && !isTxt && <ModalTxt none={setIsTxt} dune={props} />}
    </ModalReport>
  );
};

const ModalReport = styled.div`
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
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 348px;
  background-color: #fff;
  padding: 30px 24px 24px;
  box-sizing: border-box;
  border-bottom: 3px solid #07f;
  .modal-tit {
    font-size: 16px;
    line-height: 20px;
  }
  .modal-txt {
    font-size: 14px;
    line-height: 18px;
  }
  .modal-textarea {
    width: 300px;
    height: 90px;
    margin: 20px 0 16px;
    resize: none;
    box-sizing: border-box;
  }
  .modal-btn-box {
    text-align: right;
    .modal-btn {
      width: 50px;
      height: 32px;
      font-size: 12px;
      color: #fff;
      background-color: #07f;
      &:first-of-type {
        margin-right: 5px;
      }
    }
  }
`;

const ModalNone = styled.div`
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

export default ModalUserReport;
