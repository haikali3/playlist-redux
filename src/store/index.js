import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';

// Create a store with the slice
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  }, // The reducer is the slice
});

console.log(store.getState());

export { store, addSong, removeSong, addMovie, removeMovie, reset };
