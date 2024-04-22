import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import DisplayShows from "../components/DisplayShows/DisplayShows.tsx"
import Show from "../components/Show/Show.tsx"
import { useEffect, useState } from "react"

const KEY = '51c123f4a024f90c136223859b755364';

function Home() {
    const [shows, setShows] = useState([]);

    useEffect(function () {
        (fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}`))
            .then((res) => res.json())
            .then((data) => setShows(data.results))
    }, [])

    console.log(shows)

    return (
        <>
            <Header />
            <main>
                <Search />
                <DisplayShows>
                    <h1>Trending</h1>
                    {shows.map((show) => (
                        <Show key={show.id} show={show}/>
                    ))}
                </DisplayShows>
                <DisplayShows>
                    <h2>Recommended for you</h2>
                    <p>????????????</p>
                </DisplayShows>
            </main>
        </>
    )
}

export default Home