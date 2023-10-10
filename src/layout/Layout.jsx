import { Outlet,NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";


const Layout = () =>{
    return(
        <div>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/movies'>Movies</NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
           
            <main>
                <div className="container">
                    <Suspense fallback={<div>Loading..!!!!!</div>}>
                        <Outlet/>
                    </Suspense>
                </div>
            </main>

            <footer>
                <div className="container">
                    <p>footer</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout