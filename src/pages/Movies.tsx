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
                            movie={movie}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Movies