import AppLayout from "../components/AppLayout/AppLayout.tsx";
import Show from "../components/Show/Show.tsx"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

const KEY = '51c123f4a024f90c136223859b755364';

function Series() {
    const [series, setSeries] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({ q: "" })
    const q = searchParams.get("q")

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${KEY}&query=${q}`)
            .then((res) => res.json())
            .then((data) => setSeries(data.results))
    }, [q])

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${KEY}`)
            .then((res) => res.json())
            .then((data) => setSeries(data.results));
    }, []);

    return (
        <AppLayout>
            <section>
                <h1>Series!</h1>
                {series.map((serie) => (
                    <Show key={serie.id} show={serie} />
                ))}
            </section>
        </AppLayout>
    )
}

export default Series