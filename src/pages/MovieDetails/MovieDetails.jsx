
import { Suspense, useEffect, useState } from "react";
import { fetchMovieDetails } from "API/fetches";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
    const params = useParams()
    const location = useLocation();
    const [movie,setMovie] = useState(null)
    const [query] = useState(location?.state?.query || '')
    const [home] = useState(location?.state?.home || '')

    useEffect(()=>{

        fetchMovieDetails(params.movieId).then((data)=>setMovie(data))

    },[params.movieId])
    
    return (
        movie && <div>
            <Link to={location?.state?.home ? `/` : location?.state?.from ?? '/movies/'} state={{query:query, home:home}}>go back</Link>
            <h2>Movie</h2>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
            <NavLink to='cast' state={{ from: `/movies/${movie.id}`, query:query}}>Casts</NavLink>
            <NavLink to='reviews' state={{ from: `/movies/${movie.id}`, query:query}}>Reviews</NavLink>
            <Suspense fallback={<div>Loading..Casts or Reviews</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default MovieDetails