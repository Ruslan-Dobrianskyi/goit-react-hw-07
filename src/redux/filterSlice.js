import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectFilter: (state) => state.filter,
  },
  reducers: {
    onChangeSearchStr: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const filterReduce = slice.reducer;
export const { onChangeSearchStr } = slice.actions;
export const { selectFilter } = slice.selectors;
