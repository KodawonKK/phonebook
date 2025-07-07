import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
  phoneBook: [{ name: "번호를 추가해주세요", phoneNumber: "1234" }],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { name, phoneNumber }]
    }))
}));

export default usePhoneBookStore;
