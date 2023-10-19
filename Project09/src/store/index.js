//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

//createStore대신 configureStore사용 -> 여러개의 리듀서를 하나로 합칠 수 있음 (slice)
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});


export default store;
