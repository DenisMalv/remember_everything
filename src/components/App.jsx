import { Route, Routes } from "react-router-dom";

import { lazy } from "react";


// import { Home } from "pages/Home/Home";
// import { Movies } from "pages/Movies/Movies";
// import { MovieDetails } from "pages/MovieDetails/MovieDetails";
// import { Casts } from "./Casts/Casts";
// import { Review } from "./Review/Review";


const Home = lazy(() => import("pages/Home/Home"));
const Layout = lazy(() => import("layout/Layout"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Casts = lazy(() => import("components/Casts/Casts"));
const Review = lazy(() => import("components/Review/Review"));



export const App = () => {
 
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path='cast' element={<Casts />}/>
            <Route path='reviews' element={<Review />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
  );
};
