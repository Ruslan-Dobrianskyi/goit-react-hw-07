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
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
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
        const index = state.contacts.findIndex((contact) => {
          return contact.id === payload;
        });
        state.contacts.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
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
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactThunk.fulfilled,
          deleteContactThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const contactsReduce = slice.reducer;
export const { selectContacts, selectLoading, selectError } = slice.selectors;
