import { configureStore } from "@reduxjs/toolkit";
import RegData from "../Features/Registration.Slice"

const store = configureStore({
    reducer: {
      Regdata : RegData,
    },
  });
  
  export default store;