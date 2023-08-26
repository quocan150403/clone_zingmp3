import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    player: playerReducer,
    user: userReducer,
  },
});

export default store;
