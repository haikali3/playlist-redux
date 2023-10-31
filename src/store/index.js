import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice
const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    currentSong: null,
  },
  reducers: {
    // Reducers are functions that determine how the state changes
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

// Create a store with the slice
const store = configureStore({
  reducer: {
    song: songsSlice.reducer,
  }, // The reducer is the slice
});

// console.log(
// songsSlice.actions.addSong({ id: 1, title: 'Roses', artist: 'OutKast' })
// );

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
  type: 'songs/addSong',
  payload: {
    id: 1,
    title: 'Roses',
    artist: 'OutKast',
  },
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));

export { store };
