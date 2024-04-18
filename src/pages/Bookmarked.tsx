import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Bookmarked() {
    return (
        <>
            <Header />
            <main>
                <Search />
                <section>
                    <h1>Bookmarked Movies</h1>
                    {data.map((movie) => (
                        movie.category === "Movie" && movie.isBookmarked && <Show
                            // key={???}
                            movie={movie}
                        />
                    ))}
                </section>
                <section>
                    <h2>Bookmarked Series</h2>
                    {data.map((movie) => (
                        movie.category === "TV Series" && movie.isBookmarked && <Show
                            // key={???}
                            movie={movie}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Bookmarked