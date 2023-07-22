import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tracks: [],
  recentTracks: [],
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
      state.recentTracks.push(action.payload.song);
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    nextSong: (state, action) => {
      state.currentSong = state.tracks[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      state.currentSong = state.tracks[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },
  },
});

const { reducer, actions } = playerSlide;
export const { setSong, setCurrentIndex, playPause, nextSong, prevSong } = actions;
export default reducer;
