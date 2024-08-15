import { useState, useEffect } from "react"
import { useSearchParams, useParams } from "react-router-dom";

type StateProperties = {
  name: string,
  title: string,
  first_air_date: string,
  release_date: string,
  poster_path: string,
  id: string,
  vote_average: number
}

function useFetchShows(show: string) {
  const [shows, setShows] = useState<StateProperties[]>([]);
  const [searchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");
  const { pageNumber = "1" } = useParams();
  const KEY = '51c123f4a024f90c136223859b755364';

  useEffect(function () {
    async function fetchShow() {
      const res = q === "" ? await fetch(`https://api.themoviedb.org/3/discover/${show}?api_key=${KEY}&page=${pageNumber}`)
        : await fetch(`https://api.themoviedb.org/3/search/${show}?api_key=${KEY}&query=${q}`)
      const data = await res.json()
      setShows(data.results)
    }
    fetchShow()
  }, [show, q, pageNumber])

  return [shows]
}

export default useFetchShows