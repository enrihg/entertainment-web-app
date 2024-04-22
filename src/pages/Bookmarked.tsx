import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import DisplayShows from "../components/DisplayShows/DisplayShows.tsx"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Bookmarked() {
    return (
        <>
            <Header />
            <main>
                <Search />
                <DisplayShows>
                    <h1>Bookmarked Movies</h1>
                    {/* {data.map((movie) => (
                        movie.category === "Movie" && movie.isBookmarked && <Show
                            // key={???}
                            show={movie}
                        />
                    ))} */}
                </DisplayShows>
                <DisplayShows>
                    <h2>Bookmarked TV Series</h2>
                    {/* {data.map((movie) => (
                        movie.category === "TV Series" && movie.isBookmarked && <Show
                            // key={???}
                            show={movie}
                        />
                    ))} */}
                </DisplayShows>
            </main>
        </>
    )
}

export default Bookmarked