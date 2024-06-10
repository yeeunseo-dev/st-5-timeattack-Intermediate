// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    plus: (state, payload) => {
      state.value + payload;
    },
    minus: (state, payload) => {
      state.value - payload;
    },
  },
});

export const { plus, minus } = calculatorSlice.actions;

export default calculatorSlice.reducer;
