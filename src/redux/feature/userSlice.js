import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAsyncUser = createAsyncThunk(
  "users/FetchAsyncUsers",
  async () => {
    const responce = await axios
      .get("https://reqres.in/api/users")
      .catch((err) => console.log(err.message));
    return responce.data;
  }
);



const initialState = {
  users: [],
  user:{},
  loggedIn:false
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addPassword: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addUser:(state,action)=>{
      state.user=action.payload;
    },
    deleteUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    loggenInUser:state=>{
      state.loggedIn=true
    },
    loggedOutUser:state=>{
      state.loggedIn=false
      state.user={}
    }
  },
  extraReducers: {
    [FetchAsyncUser.pending]: () => {
    },
    [FetchAsyncUser.fulfilled]: (state, action) => {
      const fullData = action.payload.data.map((item) => {
        return {
          ...item,
        };
      });
      return { ...state, users: fullData };
    },
    [FetchAsyncUser.rejected]: (state) => {
      console.log("network error");
      return { ...state, error: "network error" };
    },
  },
});

export const { addEmail, addPassword,addUser, deleteUser,loggenInUser,loggedOutUser } = userSlice.actions;
export default userSlice.reducer;
