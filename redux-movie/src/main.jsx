import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { Provider } from "react-redux";
import { store } from "./features/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
