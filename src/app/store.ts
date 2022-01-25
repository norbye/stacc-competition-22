import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import collectionReducer from "../features/collections/collectionSlice";

export const store = configureStore({
  reducer: {
    collections: collectionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
