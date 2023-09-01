import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  album: {},
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

      const existingIndex = state.recentSongs.findIndex(
        (song) => song._id === action.payload.song._id,
      );
      if (existingIndex !== -1) {
        state.recentSongs.splice(existingIndex, 1);
      }

      state.recentSongs.push(action.payload.song);
      state.currentIndex = action.payload.i || 0;
      state.isActive = true;
    },

    setAlbum: (state, action) => {
      state.album = action.payload;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    nextSong: (state, action) => {
      const nextIndex = action.payload;
      const nextSong = state.tracks[nextIndex];

      const existingIndex = state.recentSongs.findIndex((song) => song._id === nextSong._id);

      if (existingIndex !== -1) {
        state.recentSongs.splice(existingIndex, 1);
      }

      state.recentSongs.push(nextSong);
      state.currentSong = nextSong;
      state.currentIndex = nextIndex;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      const prevIndex = action.payload;
      const prevSong = state.tracks[prevIndex];

      const existingIndex = state.recentSongs.findIndex((song) => song._id === prevSong._id);

      if (existingIndex !== -1) {
        state.recentSongs.splice(existingIndex, 1);
      }

      state.recentSongs.push(prevSong);
      state.currentSong = prevSong;
      state.currentIndex = prevIndex;
      state.isActive = true;
    },
  },
});

const { reducer, actions } = playerSlide;
export const { setSong, setAlbum, playPause, nextSong, prevSong } = actions;
export default reducer;
