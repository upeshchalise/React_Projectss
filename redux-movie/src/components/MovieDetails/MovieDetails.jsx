import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./MovieDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getShowOrMovieDetail,
  fetchSeriesOrMovieDetail,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getShowOrMovieDetail);
  console.log(data);

  useEffect(() => {
    dispatch(fetchSeriesOrMovieDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading ...</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title"> {data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbIDRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.Votes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calender"></i> : {data.Year}
              </span>
            </div>

            <div className="movie-plot">{data.plot}</div>
            <div className="movie-info">
              <div>
                <span>Director </span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars </span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre </span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages </span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards </span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
