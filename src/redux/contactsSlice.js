import usersData from "../assets/users.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: usersData,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
  },
  reducers: {
    addNewContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((user) => user.id !== payload);
    },
  },
});

export const contactsReduce = slice.reducer;
export const { addNewContact, deleteContact } = slice.actions;
export const { selectContacts } = slice.selectors;
