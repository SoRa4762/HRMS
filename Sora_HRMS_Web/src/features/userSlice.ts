import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import Avatar from "../assets/svgs/undraw_avatar.svg";
import type { ISignInData } from "../interfaces/IAuth";
import { signInService } from "../services/auth";
import type { IInitialState } from "../interfaces/IUserData";

const initialState: IInitialState = {
  currentUser: {
    username: "User",
    employeeId: "#Emp001",
    profilePicture: "",
    role: "employee",
    token: "",
  },
  status: "Idle" as "Idle" | "Pending" | "Fulfilled" | "Failed",
};

export const userSignInThunk = createAsyncThunk(
  "userSlice/userSignInThunk",
  async (signInData: ISignInData, { rejectWithValue }) => {
    try {
      const response = await signInService(signInData);

      localStorage.setItem("userData", JSON.stringify(response));
      console.log("The sign in was successful: ", response);

      return response;
    } catch (err) {
      return rejectWithValue({ error: err });
    }
  }
);

const UserSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    resetState: (state) => {
      return { ...state, ...initialState };
    },
    updatedState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignInThunk.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(userSignInThunk.fulfilled, (state, action) => {
        state.currentUser = { ...state, ...action.payload };
        state.status = "Fulfilled";
      })
      .addCase(userSignInThunk.rejected, (state) => {
        state.status = "Failed";
      });
  },
});

export const { resetState, updatedState } = UserSlice.actions;
export default UserSlice.reducer;
