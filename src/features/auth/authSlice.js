import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "./authApi";

export const checkUser = createAsyncThunk(
  "auth/checkUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.checkUser();
      return response;
    } catch (error) {
      return rejectWithValue(error || "Lấy thông tin người dùng thất bại");
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (refreshToken, { rejectWithValue }) => {
    try {
      const response = await authAPI.refreshToken(refreshToken);
      return response;
    } catch (error) {
      return rejectWithValue(error || "Làm mới token thất bại");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.userInfo = null;
      })

      .addCase(refreshToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.userInfo) {
          state.userInfo = action.payload.userInfo;
          state.isAuthenticated = true;
        }
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.userInfo = null;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
