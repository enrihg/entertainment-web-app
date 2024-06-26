import AppLayout from "../components/AppLayout/AppLayout.tsx";
import Show from "../components/Show/Show.tsx"
import NavigationButtons from "../components/NavigationButtons/NavigationButtons.tsx";
import { useEffect, useState } from "react"
import { useSearchParams, useParams } from "react-router-dom";

const KEY = '51c123f4a024f90c136223859b755364';

function Series() {
    const [series, setSeries] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({ q: "" })
    const q = searchParams.get("q");
    const { pageNumber = "1" } = useParams();
    const url1 = `/series/page/${Number(pageNumber) - 1}`;
    const url2 = `/series/page/${Number(pageNumber) + 1}`;

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${KEY}&query=${q}`)
            .then((res) => res.json())
            .then((data) => setSeries(data.results))
            .catch(err => console.error('error:' + err));
    }, [q])

    useEffect(function () {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&page=${pageNumber}`)
            .then((res) => res.json())
            .then((data) => setSeries(data.results))
            .catch(err => console.error('error:' + err));
    }, [pageNumber]);

    return (
        <AppLayout>
            <section>
                <h1>Series</h1>
                {series.map((serie) => (
                    <Show key={serie.id} show={serie} type="TV Series" />
                ))}
            </section>
            <NavigationButtons pageNumber={pageNumber} url1={url1} url2={url2} />
        </AppLayout>
    )
}

export default Series