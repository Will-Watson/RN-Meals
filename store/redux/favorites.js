import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const index = state.ids.indexOf(action.payload.id);
      state.ids.splice(index, 1);
    },
  }
});

export default favoritesSlice.reducer;
