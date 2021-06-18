import { createSlice } from "@reduxjs/toolkit";
import { /*reducers,*/ initialState } from "../reducers/KitsReducer";

const reducers = {
  addOnlineKitsIds: (state: any, action: any) => (state.items = action.payload),
};

export const KitsSlice = createSlice({
  name: "Kits",
  initialState,
  reducers,
});

// Action creators are generated for each case reducer function
export const { addOnlineKitsIds } = KitsSlice.actions;

export default KitsSlice.reducer;
