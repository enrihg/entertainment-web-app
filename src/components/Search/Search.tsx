import './Search.css'
import iconSearch from '../../assets/icon-search.svg'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const KEY = '51c123f4a024f90c136223859b755364';

function Search() {
    const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams({ q: "" })
    const q = searchParams.get("q")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(query);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`)
            .then((res) => res.json())
            .then((data) => setQuery(data.results))
    }

    return (
        <search className='search'>
            <form action="#" onSubmit={handleSubmit}>
                <button><img src={iconSearch} alt="search icon" /></button>
                <label htmlFor="search-input">Search</label>
                <input id="search-input" type="search" value={q} onChange={e => setSearchParams(prev => { prev.set("q", e.target.value); return prev })} placeholder="Search for movies or TV series" />
            </form>
        </search>
    )
}

export default Search