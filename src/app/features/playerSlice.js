import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recentSongs: [],
  tracks: [],
  currentIndex: 0,
  currentSong: {},
  isActive: false,
  isPlaying: false,
};

const playerSlide = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSong: (state, action) => {
      state.currentSong = action.payload.song;
      state.tracks = action.payload.tracks;

      state.recentSongs.unshift(action.payload.song);
      if (state.recentSongs.length > 6) {
        state.recentSongs.pop();
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    nextSong: (state, action) => {
      const nextIndex = action.payload;
      const nextSong = state.tracks[nextIndex];

      const existsInRecent = state.recentSongs.some((song) => song.id === nextSong.id);

      if (!existsInRecent) {
        state.recentSongs.unshift(nextSong);
        if (state.recentSongs.length > 6) {
          state.recentSongs.pop();
        }
      }

      state.currentSong = nextSong;
      state.currentIndex = nextIndex;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      const prevIndex = action.payload;
      const prevSong = state.tracks[prevIndex];

      const existsInRecent = state.recentSongs.some((song) => song.id === prevSong.id);

      if (!existsInRecent) {
        state.recentSongs.unshift(prevSong);
        if (state.recentSongs.length > 6) {
          state.recentSongs.pop();
        }
      }

      state.currentSong = prevSong;
      state.currentIndex = prevIndex;
      state.isActive = true;
    },
  },
});

const { reducer, actions } = playerSlide;
export const { setSong, setCurrentIndex, playPause, nextSong, prevSong } = actions;
export default reducer;
