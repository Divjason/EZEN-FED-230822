import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
const getMovie = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
      });
      const popularMovieApi = await api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedMovieApi = await api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingMovieApi = await api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = await api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en'`
      );

      const [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genreApi,
        ]);
      console.log(genreList);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
      });
    }
  };
};

export const movieAction = { getMovie };
