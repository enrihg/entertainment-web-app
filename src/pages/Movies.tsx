import AppLayout from "../components/AppLayout/AppLayout.tsx";
import Show from "../components/Show/Show.tsx"
import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom";

const KEY = '51c123f4a024f90c136223859b755364';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({ q: "" });
    const q = searchParams.get("q");
    const [page, setPage] = useState(1);

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${q}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }, [q])

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&page=${page}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }, [page])

    const previousPage = () => setPage(() => page - 1) 
    const nextPage = () => setPage( () => page + 1) 

    return (
        <AppLayout>
            <div>
                {page != 1 && <button onClick={previousPage}>ANTERIOR</button>}
                <button onClick={nextPage}>SIGUIENTE</button>
            </div>
            <Link to="/movies/page/2342">haga clikkkkk</Link>
          
            <section>
                <h1>Movies!</h1>
                {movies.map((movie) => (
                    <Show key={movie.id} show={movie} />
                ))}
            </section>
        </AppLayout>
    )
}

export default Movies