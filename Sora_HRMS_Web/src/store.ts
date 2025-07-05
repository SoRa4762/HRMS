import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    UserData: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
