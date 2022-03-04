const ModalCheckTxt = (props) => {
  const onClickClose = () => {
    props.none(true);
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

export default ModalCheckTxt;