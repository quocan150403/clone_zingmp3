import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlide';
import userReducer from './features/userSlide';

const store = configureStore({
  reducer: {
    player: playerReducer,
    user: userReducer,
  },
});

export default store;
