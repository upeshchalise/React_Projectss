import { Link } from "react-router-dom";
import user from "../images/user.png";
import "./Header.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  movieFetchAsync,
  seriesFetchAsync,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (search === "") return alert("Please enter a name !!");

    dispatch(movieFetchAsync(search));
    dispatch(seriesFetchAsync(search));
    setSearch("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            placeholder="Search movies or shows"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user image" />
      </div>
    </div>
  );
};

export default Header;
