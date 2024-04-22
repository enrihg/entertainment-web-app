import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import DisplayShows from "../components/DisplayShows/DisplayShows.tsx"
import Show from "../components/Show/Show.tsx"
import { useEffect, useState } from "react"

const KEY = '51c123f4a024f90c136223859b755364';

function Series() {
    const [series, setSeries] = useState([])

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${KEY}`)
            .then((res) => res.json())
            .then((data) => setSeries(data.results))
    }, []);

    return (
        <>
            <Header />
            <main>
                <Search />
                <DisplayShows>
                    <h1>Series!</h1>
                    {series.map((serie) => (
                        <Show key={serie.id} show={serie}/>
                    ))}
                </DisplayShows>

            </main>
        </>
    )
}

export default Series