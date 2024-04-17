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
                        title={movie.title}
                        year={movie.year}
                        category={movie.category}
                        rating={movie.rating}
                        isTrending={movie.isTrending}
                        isBookmarked={movie.isBookmarked}
                        thumbnail={movie.thumbnail}
                    />
                ))}

            </main>
        </>
    )
}

export default Series