import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import DisplayShows from "../components/DisplayShows/DisplayShows.tsx"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Home() {
    return (
        <>
            <Header />
            <main>
                <Search />
                <DisplayShows>
                    <h1>Trending</h1>
                    {data.map((movie) => (
                        movie.isTrending && <Show
                            // key={???}
                            movie={movie}
                        />
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