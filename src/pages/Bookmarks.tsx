import AppLayout from "../components/AppLayout/AppLayout.tsx"
import data from "../data.ts"
import Show from "../components/Show/Show.tsx"

function Bookmarks() {
    return (
        <AppLayout>
            <section>
                <h1>Bookmarked Movies</h1>
                {/* {data.map((movie) => (
                        movie.category === "Movie" && movie.isBookmarked && <Show
                            // key={???}
                            show={movie}
                        />
                    ))} */}
            </section>
            <section>
                <h2>Bookmarked TV Series</h2>
                {/* {data.map((movie) => (
                        movie.category === "TV Series" && movie.isBookmarked && <Show
                            // key={???}
                            show={movie}
                        />
                    ))} */}
            </section>
        </AppLayout>
    )
}

export default Bookmarks