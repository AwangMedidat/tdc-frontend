import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./users/slice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});
