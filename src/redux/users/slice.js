import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: null,
    userDetail: null,
    message: null,
    loading: false,
  },

  reducers: {
    usersStart(state) {
      state.loading = true;
      state.users = null;
    },
    usersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    usersFailure(state) {
      state.loading = false;
      state.users = null;
    },
    userDetailStart(state) {
      state.userDetail = null;
    },
    userDetailSuccess(state, action) {
      state.userDetail = action.payload;
    },
    userDetailFailure(state) {
      state.userDetail = null;
    },
    userAddStart(state) {
      state.loading = true;
      // state.user = null;
    },
    userAddSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
      // state.user = action.payload;
    },
    userAddFailure(state) {
      state.loading = false;
      // state.user = null;
    },
    userDeleteSuccess(state, action) {
        state.loading = false;
        state.message = action.payload;
      },
  },
});

export const {
  usersStart,
  usersSuccess,
  usersFailure,
  userDetailFailure,
  userDetailStart,
  userDetailSuccess,
  userAddStart,
  userAddSuccess,
  userAddFailure,
  userDeleteSuccess
} = userSlice.actions;

export default userSlice.reducer;
