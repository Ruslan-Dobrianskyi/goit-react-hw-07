import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";
import { selectFilter } from "./filterSlice";

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
