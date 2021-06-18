import { configureStore } from "@reduxjs/toolkit";
// import { KitsReducer } from "../reducers/KitsReducer";
import KitsReducer from "./KitsSlice";

export const store = configureStore({
  reducer: {
    KitsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
