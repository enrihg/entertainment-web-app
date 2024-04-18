import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Series() {
    return (
        <>
            <Header />
            <main>
                <Search />
                <h1>Series!</h1>
                {data.map((movie) => (
                    movie.category === "TV Series" && <Show
                        // key={???}
                        movie={movie}
                    />
                ))}

            </main>
        </>
    )
}

export default Series