import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: {
      userId: '',
      first_name: '',
      last_name: ''
    }
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {
        userId: '',
        first_name: '',
        last_name: ''
      };
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
