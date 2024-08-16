import { configureStore } from "@reduxjs/toolkit";
import GuessWordSlice from "../features/GuessWordSlice";

export const store = configureStore({
  reducer: { GuessWordSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
