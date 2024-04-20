import './Header.css'
import logo from '../../assets/logo.svg'
import iconHome from '../../assets/icon-nav-home.svg'
import iconMovies from '../../assets/icon-nav-movies.svg'
import iconSeries from '../../assets/icon-nav-tv-series.svg'
import iconBookmark from '../../assets/icon-nav-bookmark.svg'
import avatar from '../../assets/image-avatar.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <a href="#"><img className='logo' src={logo} alt="logo" /></a>
                <ul>
                    <li><Link to="/"><img src={iconHome} alt="home" /></Link></li>
                    <li><Link to="/movies"><img src={iconMovies} alt="movies" /></Link></li>
                    <li><Link to="/series"><img src={iconSeries} alt="series" /></Link></li>
                    <li><Link to="/bookmarked"><img src={iconBookmark} alt="bookmark" /></Link></li>
                </ul>
                <a href="#"><img className='avatar' src={avatar} alt="avatar" /></a>
            </nav>
        </header>
    )
}

export default Header