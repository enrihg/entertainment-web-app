import './Search.css'
import iconSearch from '../../assets/icon-search.svg'
import { useSearchParams } from 'react-router-dom';

function Search() {
    const [searchParams, setSearchParams] = useSearchParams({ q: "" })
    const q = searchParams.get("q")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <search className='search'>
            <form action="#" onSubmit={handleSubmit}>
                <button><img src={iconSearch} alt="search icon" /></button>
                <label htmlFor="search-input">Search</label>
                <input id="search-input" type="search" value={q} onChange={e => setSearchParams(prev => { prev.set("q", e.target.value); return prev })} placeholder={"Search content"} />
            </form>
        </search>
    )
}

export default Search