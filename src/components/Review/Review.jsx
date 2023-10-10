
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "API/fetches";
import { useParams } from "react-router-dom";

const Review = () => {
    const params = useParams()
    const [movieReview,setMovieReviews] = useState(null)



    useEffect(()=>{
        fetchMovieDetails(params.movieId,'reviews').then((data)=>setMovieReviews(data.results))
    },[])
    
    return (
        <div>
            <h2>Review</h2>
            <ul>
                {movieReview && movieReview.map((el)=><li key={el.id}>{el.content}</li>)}
            </ul>
        </div>
    )
}

export default Review