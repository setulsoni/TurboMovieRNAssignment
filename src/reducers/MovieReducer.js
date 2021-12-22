import { TYPES } from '../actions/MovieActions';

const initialState = {
  movieData: null,
  movieList: [],
};

export const movieReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.FETCH_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movieList: (payload.pageNo === 1) ? payload.movieData.movies : [...state.movieList, ...payload.movieData.movies],
        movieData: payload.movieData,
      };
    case TYPES.FETCH_MOVIE_LIST_ERROR:
      return {
        ...state,
        movieList: (payload.pageNo === 1) ? [] : state.movieList,
        movieData: (payload.pageNo === 1) ? {} : state.movieData,
      };
    default:
      return state;
  }
};
