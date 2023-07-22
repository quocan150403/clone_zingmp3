import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlide';

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
