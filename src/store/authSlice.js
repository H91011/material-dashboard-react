import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAuth: (state, { payload: { token, user } }) => {
      console.log(token, user);
      state.token = token;
      state.user = user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
