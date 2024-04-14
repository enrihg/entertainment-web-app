import './Search.css'
import iconSearch from '../../assets/icon-search.svg'

function Search() {
    return (
        <search className='search'>
            <form action="#">
                <button><img src={iconSearch} alt="search icon" /></button>
                <label htmlFor="search-input">Search</label>
                <input id="search-input" type="search" placeholder="Search for movies or TV series"/>
            </form>
        </search>
    )
}

export default Search