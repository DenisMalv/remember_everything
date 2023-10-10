
import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "API/fetches";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation()
    const [movies,setMovies] = useState(null)

    useEffect(()=>{
      fetchTrandingMovies().then((data)=>setMovies(data.results))
      
    },[])
    
    return (
        <div>
            <h2>Home</h2>
            <ul>
                {movies && movies.map(item=>
                <li key={item.title}>
                    <Link to={`movies/${item.id}`} state={{from:location.pathname, home:true,}}>{item.title}</Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Home