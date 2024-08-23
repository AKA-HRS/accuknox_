import { configureStore } from "@reduxjs/toolkit";
import widgetsReducer from "./slice/widget";

const store = configureStore({
  reducer: {
    widgets: widgetsReducer,
  },
});

export default store;
