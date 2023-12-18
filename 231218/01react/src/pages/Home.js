import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log(popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#f00",
  };

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className="slide">
        <Banner movie={popularMovies.results[3]} />
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>Top Rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upComingMovies} />
      </div>
    );
  }
};

export default Home;
