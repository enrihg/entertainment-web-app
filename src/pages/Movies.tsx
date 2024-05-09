import AppLayout from "../components/AppLayout/AppLayout.tsx";
import Show from "../components/Show/Show.tsx"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

const KEY = '51c123f4a024f90c136223859b755364';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams({ q: "" })
    const q = searchParams.get("q")

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${q}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }, [q])

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
    }, [])

    return (
        <AppLayout>
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