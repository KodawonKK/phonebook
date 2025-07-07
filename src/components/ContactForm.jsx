import { useState } from "react";
import styled from "styled-components";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import Minimize from "../icon/minimize.svg";
import Full from "../icon/square.svg";
import Close from "../icon/close.svg";
import Modal from "./Modal/Modal";

const PhoneBookWrap = styled.div`
  padding: 20px;
`;
const PhoneBook = styled.div`
  max-width: 720px;
  margin: 0 auto;
  box-shadow: -6px 7px 0 0 #000000;
  border-top-left-radius: 15px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 5px;
`;
const PhoneBookTop = styled.div`
  border: 2px solid #000;
  padding: 10px 10px;
  background: #efb5ff;
  border-top-left-radius: 15px;
  border-top-right-radius: 10px;
`;
const PhoneBookBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;
const PhoneBookBtn = styled.button`
  border: 1px solid #000;
  border-radius: 50%;
  padding: 5px 8px;
  background: #fdd0cd;
`;
const PhoneBookBtmWrap = styled.div`
  background: #b7c6ff;
  padding: 10px 0;
  border: 2px solid #000;
  border-top: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const PhoneBookBtm = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding: 15px 0;
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const InputWrap = styled.div`
  border: 1px solid #000;
`;
const Input = styled.input`
  border: none;
`;
const Button = styled.button`
  border: 1px solid #000;
  background: #ffbde1;
  padding: 5px;
  font-size: 12px;
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOkay, setOkay] = useState(false);

  const { addContact } = usePhoneBookStore();
  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    setOkay(true);
    addContact(name, phoneNumber);
    setName("");
    setPhoneNumber("");
  };

  return (
    <PhoneBookWrap>
      <h1>PHONEBOOK</h1>
      <PhoneBook>
        <PhoneBookTop>
          <PhoneBookBtnWrap>
            <PhoneBookBtn>
              <img src={Minimize} width="10px" alt="minimize" />
            </PhoneBookBtn>
            <PhoneBookBtn>
              <img src={Full} width="10px" alt="full" />
            </PhoneBookBtn>
            <PhoneBookBtn>
              <img src={Close} width="9px" alt="close" />
            </PhoneBookBtn>
          </PhoneBookBtnWrap>
        </PhoneBookTop>
        <PhoneBookBtmWrap>
          <PhoneBookBtm>
            <InputWrap>
              <Input
                id="name"
                label="이름"
                placeholder="NAME"
                type=""
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputWrap>
            <InputWrap>
              <Input
                id="phoneNumber"
                label="전화번호"
                placeholder="PHONE NUMBER"
                type=""
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </InputWrap>
            <Button variant="contained" onClick={handleAddContact}>
              ENTER
            </Button>
          </PhoneBookBtm>
        </PhoneBookBtmWrap>
      </PhoneBook>
      {isOkay && <Modal setOkay={setOkay} />}
    </PhoneBookWrap>
  );
};

export default ContactForm;
