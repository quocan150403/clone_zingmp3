import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import userReducer from './features/userSlice';
import playlistReducer from './features/playlistSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    player: playerReducer,
    playlist: playlistReducer,
  },
});

export default store;
