import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import data from "../data.ts"
import Movie from "../components/Movie/Movie.tsx"

function Movies() {

    console.log(data[0])

    return (
        <>
            <Header />
            <main>
                <Search />
                <h1>Movies!</h1>
                {data.map((movie) => (
                    <Movie
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

export default Movies