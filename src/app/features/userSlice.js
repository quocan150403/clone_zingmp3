const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {},
    isShowAuthForm: false,
    isAuth: false,
    loading: false,
    error: null,
  },
  reducers: {
    openAuthForm: (state) => {
      state.isShowAuthForm = true;
    },
    closeAuthForm: (state) => {
      state.isShowAuthForm = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.isAuth = false;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuth = false;
    },
    setSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    updateUserField: (state, action) => {
      const { field, value } = action.payload;
      state.currentUser = {
        ...state.currentUser,
        [field]: value,
      };
    },
    logout: (state) => {
      state.currentUser = {};
      state.isAuth = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  setLoading,
  setError,
  setSuccess,
  logout,
  updateUserField,
  openAuthForm,
  closeAuthForm,
} = actions;
export default reducer;
