import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Registration User
export const RegUser = createAsyncThunk("RegUser", async (data) => {
  console.log("Request login Payload:", data);
  try {
    const response = await axios.post(
      "http://localhost:8000/api/users/register",
      data
    );
    
    window.localStorage.setItem('regId', response.data.regId)
    console.log("response login data:", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
});

const Slice = createSlice({
  name: "user",
  reducers: {},
  initialState: {
    isLoading: false,
    data: [],
    regInfo: [],
    error: false,
  },
  extraReducers: (builder) => {

    // loginUser
    builder.addCase(RegUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(RegUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.regInfo = action.payload;
    });
    builder.addCase(RegUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default Slice.reducer;
