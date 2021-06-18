import { createReducer } from "@reduxjs/toolkit";
import { ADD_ONLINE_KITS_IDS } from "redux/actions/KitsActions";

type IKitsStore = {
  items: Array<string>;
  onlineKitsIds: Array<any>;
};
export const initialState: IKitsStore = {
  items: [],
  onlineKitsIds: [],
};

export const reducers = createReducer(initialState, (builder) => {
  builder.addCase(ADD_ONLINE_KITS_IDS, (state: any, action: any) => {
    state.onlineKitsIds = action.payload;
  });
});
