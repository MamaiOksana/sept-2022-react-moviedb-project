import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {MovieInfo} from "./components";
import {MoviesPage} from "./containers/MoviesPage";
import {Paths} from "./routes/routes";




function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path={Paths.MOVIES} element={<MoviesPage/>} />
              <Route path={`:id`} element={<MovieInfo/>} />
          </Routes>
      </BrowserRouter>
  );
}

export {
  App
};
