/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

export interface profile {
  dataLogin: {
    idUser: string;
    email: string;
    phone: string;
    isLogin: boolean;
    firstOpenApp: boolean;
    username: string;
    profilePicture: string;
    value: number;
    token: string;
    head_driver: number;
  };
  UImode: string;
}

const initialState: profile = {
  dataLogin: {
    idUser: "",
    email: "",
    phone: "",
    isLogin: false,
    firstOpenApp: true,
    username: "rafles",
    profilePicture: "",
    value: 0,
    head_driver: 0,
    token: "",
  },
  UImode: "light",
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setDataLogin: (state, action: PayloadAction<any>): void => {
      // state.isLogin = action.payload;
      // state.username = action.payload;
      // state.profilePicture = action.payload;
      state.dataLogin = action.payload;
    },
    logout: (state: {
      dataLogin: {
        isLogin: boolean;
        username: string;
        profilePicture: string;
        head_driver: number;
        firstOpenApp: boolean;
      };
    }) => {
      state.dataLogin.isLogin = false;
      state.dataLogin.username = "";
      state.dataLogin.profilePicture = "";
      state.dataLogin.head_driver = 0;
      state.dataLogin.firstOpenApp = false;
    },
    changeDarkMode: (
      state: { UImode: any },
      action: PayloadAction<any>
    ): void => {
      state.UImode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataLogin, changeDarkMode, logout } = ProfileSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.login;

export default ProfileSlice.reducer;
