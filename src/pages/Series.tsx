import AppLayout from "../components/AppLayout/AppLayout.tsx";
import Show from "../components/Show/Show.tsx"
import NavigationButtons from "../components/NavigationButtons/NavigationButtons.tsx";
import useFetchShows from "../hooks/useFetchShows.tsx";

function Series() {
  const [series] = useFetchShows("tv")

  return (
    <AppLayout>
      <section>
        <NavigationButtons show="series" />
        <h1>Series</h1>
        {series.map((serie) => (
          <Show key={serie.id} show={serie} type="TV Series" />
        ))}
      </section>
    </AppLayout>
  )
}

export default Series