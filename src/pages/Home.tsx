import AppLayout from "../components/AppLayout/AppLayout.tsx";
import Show from "../components/Show/Show.tsx"
import People from "../components/People/People.tsx";
import { useEffect, useState } from "react"

const KEY = '51c123f4a024f90c136223859b755364';

function Home() {
    const [shows, setShows] = useState([]);
    const [persons, setPersons] = useState([]);
    // const [isLoading, setIsloading] = useState(false);

    useEffect(function () {
        async function fetchShows() {
            // setIsloading(true);
            const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
            const data = await res.json();
            setShows(data.results);
            // setIsloading(false);
        }
        fetchShows()

        // (fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`))
        //     .then((res) => res.json())
        //     .then((data) => setShows(data.results))
        //     .catch(err => console.error('error:' + err));
    }, [])

    console.log(shows)

    useEffect(function () {
        (fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${KEY}`))
            .then((res) => res.json())
            .then((data) => setPersons(data.results))
            .catch(err => console.error('error:' + err));
    }, [])

    console.log(persons);

    return (
        <AppLayout>
            <section>
                <h1>Trending Shows</h1>
                {shows.map((show) => (
                    <Show key={show.id} show={show} />
                ))}
            </section>
            {/* <section>
                <h2>Trending People</h2>
                {persons.map((person) => (
                    <People key={person.id} show={person} />
                ))}
            </section> */}
        </AppLayout >
    )
}

export default Home