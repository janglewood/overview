import { createAction } from "@reduxjs/toolkit";

export const ADD_ONLINE_KITS_IDS = createAction<Array<string>>(
  "ADD_ONLINE_KITS_IDS"
);
