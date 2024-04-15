// import usersData from "../assets/users.json";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  fetchContactsThunk,
  deleteContactThunk,
} from "./contactsOps";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter((user) => user.id !== payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        (state) => {
          state.loading = true;
        }
      );
  },

  // reducers: {
  //   addNewContact: (state, { payload }) => {
  //     state.contacts.push(payload);
  //   },
  //   deleteContact: (state, { payload }) => {
  //     state.contacts = state.contacts.filter((user) => user.id !== payload);
  //   },
  // },
});

export const contactsReduce = slice.reducer;
export const { selectContacts } = slice.selectors;
