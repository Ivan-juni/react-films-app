import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Favorite from "./pages/FavoriteFilms/Favorite";
import Details from "./pages/FilmDetails/Details";
import Home from "./pages/HomePage/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default AppRouter;
