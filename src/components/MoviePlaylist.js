import { useDispatch, useSelector } from 'react-redux';
import { createRandomMovie } from '../data';
import { addMovie, removeMovie } from '../store';

function MoviePlaylist() {
  const dispatch = useDispatch(); //https://react-redux.js.org/api/hooks#usedispatch
  // Get list of movies
  const moviePlaylist = useSelector((state) => {
    //https://react-redux.js.org/api/hooks#useselector
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    const action = addMovie(movie);
    dispatch(action);
  };
  const handleMovieRemove = (movie) => {
    const action = removeMovie(movie);
    dispatch(action);
    console.log(action);
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
