import {MovieInfo} from "./components";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MoviesPage} from "./containers/MoviesPage";

export const Paths = {
    MOVIES: '/movies'
}


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={Paths.MOVIES} element={<MoviesPage/>} />
              <Route path={`${Paths.MOVIES}/:id`} element={<MovieInfo/>} />
          </Routes>
      </BrowserRouter>
  );
}

export {
  App
};
