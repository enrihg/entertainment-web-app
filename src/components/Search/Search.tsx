import './Search.css'
import iconSearch from '../../assets/icon-search.svg'
import { useState } from 'react'

function Search() {
    const [query, setQuery] = useState("");

    return (
        <search className='search'>
            <form action="#" onSubmit={(e) => e.preventDefault}>
                <button><img src={iconSearch} alt="search icon" /></button>
                <label htmlFor="search-input">Search</label>
                <input id="search-input" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for movies or TV series" />
            </form>
        </search>
    )
}

export default Search