import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import DisplayShows from "../components/DisplayShows/DisplayShows.tsx"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Movies() {

    console.log(data[0])

    return (
        <>
            <Header />
            <main>
                <Search />
                <DisplayShows>
                    <h1>Movies!</h1>
                    {data.map((movie) => (
                        movie.category === "Movie" && <Show
                            // key={???}
                            movie={movie}
                        />
                    ))}
                </DisplayShows>
            </main>
        </>
    )
}

export default Movies