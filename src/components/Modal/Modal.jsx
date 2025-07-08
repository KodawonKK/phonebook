import React, { useState } from "react";
import styled from "styled-components";

const ModalWrap = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 60%;
  margin: 0 auto;
  z-index: 999;
`;
const ModalTop = styled.div`
  background: #ff82b0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #000;
  height: 20px;
`;
const ModalBtm = styled.div`
  background: #8ecfcf;
  border: 1px solid #000;
  border-top: 0;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 5px;
`;
const ImgWrap = styled.div`
  width: 30%;
  margin: 0 auto;
`;
const ModalTxtBtnWrap = styled.div`
  font-size: 21px;
  text-align: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 30%;
`;
const ModalTxt = styled.div`
  color: #fff;
`;
const ModalBtnWrap = styled.div`
  text-align: center;
  padding-top: 10px;
`;
const ModalBtn = styled.button`
  border: 1px solid #000;
`;
const Modal = ({ setOkay }) => {
  const addOkayBtn = () => {
    console.log("gg");
    setOkay(false);
  };

  return (
    <ModalWrap>
      <ModalTop></ModalTop>
      <ModalBtm>
        <ImgWrap>
          <img src={require("../../icon/love.png")} alt="하트아이콘" width="100%" />
        </ImgWrap>
        <ModalTxtBtnWrap>
          <ModalTxt>Phone number added!!</ModalTxt>
          <ModalBtnWrap>
            <ModalBtn onClick={addOkayBtn}>Okay</ModalBtn>
          </ModalBtnWrap>
        </ModalTxtBtnWrap>
      </ModalBtm>
    </ModalWrap>
  );
};

export default Modal;
