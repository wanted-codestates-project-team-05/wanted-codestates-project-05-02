import React from 'react';
import styled from 'styled-components';
import { FiDelete } from 'react-icons/fi';
function GuideModal({ isModal, ModalHanlder }) {
  return (
    <ModalBackGround>
      <Modal>
        <img width={800} src="https://tmi.nexon.com/img/assets/guide_desc.png" />
        <img className="dao" src="https://tmi.nexon.com/img/assets/guide_dao.png" />
        <img className="bazzie" src="https://tmi.nexon.com/img/assets/guide_bazzie.png" />
        <img className="bubble" src="https://tmi.nexon.com/img/assets/guide_bubble.png" />
        <img className="gg" src="https://tmi.nexon.com/img/assets/guide_gg.png" />
        <FiDelete
          onClick={ModalHanlder}
          size={30}
          style={{
            position: 'absolute',
            top: -50,
            right: 20,
            cursor: 'pointer',
          }}
        />
      </Modal>
    </ModalBackGround>
  );
}
const ModalBackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 150px;
  height: 500px;
  z-index: 9999;
  .dao {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .bazzie {
    position: absolute;
    right: 200px;
    top: 40px;
  }
  .bubble {
    position: absolute;
    right: 180px;
    top: -30px;
  }
  .gg {
    position: absolute;
    right: 100px;
    top: -30px;
  }
`;

export default GuideModal;
