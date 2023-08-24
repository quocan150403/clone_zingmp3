const { createSlice } = require('@reduxjs/toolkit');

const userSlide = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    currentUser: {},
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.current = {};
      state.isAuth = false;
    },
  },
});

const { reducer, actions } = userSlide;
export const { setCurrentUser, logout } = actions;
export default reducer;
