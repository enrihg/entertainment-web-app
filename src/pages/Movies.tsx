import AppLayout from "../components/AppLayout/AppLayout.tsx";
import Show from "../components/Show/Show.tsx";
import NavigationButtons from "../components/NavigationButtons/NavigationButtons.tsx";
import useFetchShows from "../hooks/useFetchShows.tsx";

function Movies() {
  const [movies] = useFetchShows("movie")

  return (
    <AppLayout>
      <section>
        <NavigationButtons show="movies" />
        <h1>Movies</h1>
        {movies.map((movie) => (
          <Show key={movie.id} show={movie} type="Movie" />
        ))}
      </section>
      {/* <NavigationButtons show="movie" /> */}
    </AppLayout>
  )
}

export default Movies