
import { useEffect, useState } from "react";
import { fetchMovie } from "API/fetches";
import { Link, useLocation } from "react-router-dom";

const Movies = () => {
    const location = useLocation();
    const [movies,setMovies] = useState(null)
    const [inputValue,setInputValue] = useState(location?.state?.query || '')

    const onInput = (e)=>setInputValue(e.target.value)
    const onSubmit = (e)=>{
        e.preventDefault();
        fetchMovie(inputValue).then((data)=>setMovies(data.results))
    }

    useEffect(()=>{
        location?.state?.query && fetchMovie(location.state.query).then((data)=>setMovies(data.results))
    },[location.state.query])
    
    return (
        <div>
            <h2>Movies</h2>
            <form action="#" onSubmit={onSubmit}>
                <input type="text" name="" id="" value={inputValue} onChange={onInput}/>
                <button>Search</button>
            </form>

            <ul >
            {
               movies && movies.map((el)=><li key={el.id} id={el.id}>
                     <Link to={`${el.id}`} state={{from : location.pathname, query: inputValue }}>{el.title}</Link>
                </li>)    
            }
            </ul>
        </div>
    )
}

export default Movies