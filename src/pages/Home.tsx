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
                            movie={movie}
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