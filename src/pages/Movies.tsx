import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Movies() {

    console.log(data[0])

    return (
        <>
            <Header />
            <main>
                <Search />
                <section>
                    <h1>Movies!</h1>
                    {data.map((movie) => (
                        movie.category === "Movie" && <Show
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

export default Movies