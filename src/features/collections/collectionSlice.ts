import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CollectionState {
  selectedCollections: string[];
}

const initialState: CollectionState = {
  selectedCollections: [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggle: (state, action: PayloadAction<string>) => {
      if (state.selectedCollections.includes(action.payload)) {
        state.selectedCollections = state.selectedCollections.filter(
          (item) => item !== action.payload
        );
      } else {
        state.selectedCollections.push(action.payload);
      }
    },
    clear: (state) => {
      state.selectedCollections = [];
    },
  },
});

export const { toggle, clear } = collectionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCollections = (state: RootState) =>
  state.collections.selectedCollections;

export default collectionSlice.reducer;
