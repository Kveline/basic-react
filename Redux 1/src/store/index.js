//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // untuk di useSelector()
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
