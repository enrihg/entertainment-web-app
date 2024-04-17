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
                            title={movie.title}
                            year={movie.year}
                            category={movie.category}
                            rating={movie.rating}
                            isTrending={movie.isTrending}
                            isBookmarked={movie.isBookmarked}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </section>
                <section>
                    <h2>Bookmarked Series</h2>
                    {data.map((movie) => (
                        movie.category === "TV Series" && movie.isBookmarked && <Show
                            // key={???}
                            title={movie.title}
                            year={movie.year}
                            category={movie.category}
                            rating={movie.rating}
                            isTrending={movie.isTrending}
                            isBookmarked={movie.isBookmarked}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Bookmarked