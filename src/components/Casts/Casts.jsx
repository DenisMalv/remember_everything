
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "API/fetches";
import { useLocation, useParams } from "react-router-dom";

const Casts = () => {
    const params = useParams()
    const [movieCasts,setMovieCasts] = useState(null)

    useEffect(()=>{
        fetchMovieDetails(params.movieId,'credits').then((data)=>setMovieCasts(data.cast))
    },[])
    
    return (
        <div>
            <h2>Casts</h2>
            <ul>
                {movieCasts && movieCasts.map((el)=><li key={el.id}>{el.name}</li>)}
            </ul>

        </div>
    )
}

export default Casts