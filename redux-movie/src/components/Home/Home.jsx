import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  movieFetchAsync,
  seriesFetchAsync,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const movieText = "Harry";
  const showsText = "Friends";

  useEffect(() => {
    dispatch(movieFetchAsync(movieText));
    dispatch(seriesFetchAsync(showsText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
