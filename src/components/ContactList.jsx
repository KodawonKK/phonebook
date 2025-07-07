import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import styled from "styled-components";

const ContactListWrap = styled.div`
  padding: 20px 20px;
  max-width: 720px;
  margin: 0 auto;
`;
const ContactBookWrap = styled.div`
  box-shadow: -6px 7px 0 0 #000000;
  border-top-left-radius: 15px;
  border-top-right-radius: 10px;
`;
const ContactBook = styled.div`
  height: 300px;
  border: 2px solid #000;
  background: #ffafaf;
  border-top-left-radius: 15px;
  border-top-right-radius: 12px;
`;
const ContactBookTop = styled.div`
  border-bottom: 2px solid #000;
  padding: 15px 0;
  background: #81bfff;
  border-top-left-radius: 13px;
  border-top-right-radius: 10px;
`;
const ContactBookBtm = styled.div`
  padding: 10px 10px;
`;
const ContactSearchWrap = styled.div`
  border: 1px solid #000;
  display: flex;
  /* column-gap: 5px; */
`;
const ContactSearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
const ContactSearchBtn = styled.button`
  border: none;
  background: none;
`;
const Contacts = styled.div`
  display: flex;
`;
const InfoWrap = styled.div``;
const Name = styled.h1`
  font-size: 19px;
`;
const PhoneNumber = styled.p`
  font-size: 17px;
`;

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  let [searchResult, setSearchResult] = useState([]);
  let [search, setSearch] = useState("");

  const contactSearch = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      setSearchResult(phoneBook.filter((e) => e.name === keyword));
      setSearch(keyword);
    }
  };
  return (
    <ContactListWrap>
      <ContactBookWrap>
        <ContactBook>
          <ContactBookTop></ContactBookTop>
          <ContactBookBtm>
            <ContactSearchWrap>
              <ContactSearch type="text" onKeyDown={contactSearch} />
              <ContactSearchBtn onClick={contactSearch}>
                <img src={require("../icon/search.png")} alt="검색 버튼" style={{ width: "30px" }} />
              </ContactSearchBtn>
            </ContactSearchWrap>
            {search !== "" ? (
              <div>
                {searchResult.map((item, idx) => (
                  <Contacts key={idx}>
                    <img src={require(`../icon/love-${idx + 1}.png`)} alt="번호 리스트" width="40px" />
                    <InfoWrap>
                      <Name>{item.name}</Name>
                      <PhoneNumber>{item.phoneNumber}</PhoneNumber>
                    </InfoWrap>
                  </Contacts>
                ))}
              </div>
            ) : (
              <div>
                {phoneBook.map((item, idx) => (
                  <Contacts key={idx}>
                    <img src={require(`../icon/love-${idx + 1}.png`)} alt="번호 리스트" width="40px" />
                    <InfoWrap>
                      <Name>{item.name}</Name>
                      <PhoneNumber>{item.phoneNumber}</PhoneNumber>
                    </InfoWrap>
                  </Contacts>
                ))}
              </div>
            )}
          </ContactBookBtm>
        </ContactBook>
      </ContactBookWrap>
    </ContactListWrap>
  );
};

export default ContactList;
