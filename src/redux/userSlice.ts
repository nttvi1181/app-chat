import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {},
});

export default userSlice;
