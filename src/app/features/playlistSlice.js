import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { playlistApi } from 'api';

const initialState = {
  playlists: [],
  currentPlaylist: null,
  isAddFormOpen: false,
  isEditFormOpen: false,
  isDeleteFormOpen: false,
};

export const fetchPlaylistsAsync = createAsyncThunk(
  'playlist/fetchPlaylistsAsync',
  async (userId) => {
    const response = await playlistApi.getQuery({ userId });
    return response;
  },
);

export const addPlaylistAsync = createAsyncThunk(
  'playlist/addPlaylistAsync',
  async (playlistData) => {
    const response = await playlistApi.create(playlistData);
    return response;
  },
);

export const editPlaylistAsync = createAsyncThunk(
  'playlist/editPlaylistAsync',
  async ({ id, playlistData }) => {
    const response = await playlistApi.update(id, playlistData);
    return response;
  },
);

export const deletePlaylistAsync = createAsyncThunk(
  'playlist/deletePlaylistAsync',
  async (playlistId) => {
    await playlistApi.remove(playlistId);
    return playlistId;
  },
);

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload;
    },
    openAddForm: (state) => {
      state.isAddFormOpen = true;
    },
    closeAddForm: (state) => {
      state.isAddFormOpen = false;
    },
    openEditForm: (state) => {
      state.isEditFormOpen = true;
    },
    closeEditForm: (state) => {
      state.isEditFormOpen = false;
    },
    openDeleteForm: (state) => {
      state.isDeleteFormOpen = true;
    },
    closeDeleteForm: (state) => {
      state.isDeleteFormOpen = false;
    },
    closeAllForms: (state) => {
      state.isAddFormOpen = false;
      state.isEditFormOpen = false;
      state.isDeleteFormOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylistsAsync.fulfilled, (state, action) => {
        state.playlists = action.payload;
      })
      .addCase(addPlaylistAsync.fulfilled, (state, action) => {
        state.playlists.push(action.payload);
      })
      .addCase(editPlaylistAsync.fulfilled, (state, action) => {
        const updatedIndex = state.playlists.findIndex(
          (playlist) => playlist._id === action.payload._id,
        );
        if (updatedIndex !== -1) {
          state.playlists[updatedIndex] = action.payload;
        }
      })
      .addCase(deletePlaylistAsync.fulfilled, (state, action) => {
        state.playlists = state.playlists.filter((playlist) => playlist._id !== action.payload);
      });
  },
});

export const {
  setCurrentPlaylist,
  openAddForm,
  closeAddForm,
  openEditForm,
  closeEditForm,
  openDeleteForm,
  closeDeleteForm,
  closeAllForms,
} = playlistSlice.actions;

export default playlistSlice.reducer;
