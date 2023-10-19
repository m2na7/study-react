//import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decremnet(state) {
      state.counter--;
    },
    increase(state, action) {
      //action.amount --> action.payload로 변경
      //payload는 Redux Toolkit에서 기본값으로 사용하는 필드명
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//createStore대신 configureStore사용 -> 여러개의 리듀서를 하나로 합칠 수 있음 (slice)
const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
