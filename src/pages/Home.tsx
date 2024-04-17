import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Home() {
    return (
        <>
            <Header />
            <main>
                <Search />
                <section>
                    <h1>Trending</h1>
                    {data.map((movie) => (
                        movie.isTrending && <Show
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
                    <h2>Recommended for you</h2>
                    <p>????????????</p>
                </section>
            </main>
        </>
    )
}

export default Home