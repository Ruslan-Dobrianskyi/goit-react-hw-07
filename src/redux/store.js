import { configureStore } from "@reduxjs/toolkit";
import { filterReduce } from "./filterSlice";
import { contactsReduce } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduce,
    filter: filterReduce,
  },
});
