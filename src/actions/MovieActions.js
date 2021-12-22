import MovieController from '../controllers/MovieController';

export const TYPES = {
  FETCH_MOVIE_LIST: 'FETCH_MOVIE_LIST',
  FETCH_MOVIE_LIST_REQUEST: 'FETCH_MOVIE_LIST_REQUEST',
  FETCH_MOVIE_LIST_ERROR: 'FETCH_MOVIE_LIST_ERROR',
  FETCH_MOVIE_LIST_SUCCESS: 'FETCH_MOVIE_LIST_SUCCESS',
  FETCH_MOVIE_LIST_RESET: 'FETCH_MOVIE_LIST_RESET',
};


const fetchMovieListRequest = () => ({
  type: TYPES.FETCH_MOVIE_LIST_REQUEST,
});

const fetchMovieListError = e => ({
  type: TYPES.FETCH_MOVIE_LIST_ERROR,
  e,
});

const fetchMovieListSuccess = (movieData, pageNo) => ({
  type: TYPES.FETCH_MOVIE_LIST_SUCCESS,
  payload: { movieData, pageNo },
});

export const fetchMovieListReset = () => (dispatch) => {
  dispatch({
    type: TYPES.FETCH_MOVIE_LIST_RESET
  });
};

export const fetchMovieList = (pageNo = 1) => (dispatch) => {
  dispatch(fetchMovieListRequest());
  MovieController.fetchMovieListAPI().then((movieData, pageNo) => {
    dispatch(fetchMovieListSuccess(movieData, pageNo));
  }).catch((e) => {
    console.log(e);
    dispatch(fetchMovieListError(e));
  });
};
