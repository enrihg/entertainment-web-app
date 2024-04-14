import './Header.css'
import logo from '../assets/logo.svg'
import iconHome from '../assets/icon-nav-home.svg'
import iconMovies from '../assets/icon-nav-movies.svg'
import iconSeries from '../assets/icon-nav-tv-series.svg'
import iconBookmark from '../assets/icon-nav-bookmark.svg'
import avatar from '../assets/image-avatar.png'

function Header() {
    return (
        <header className="header">
            <a href="#"><img className='logo' src={logo} alt="logo" /></a>
            <nav>
                <a href="#"><img src={iconHome} alt="home" /></a>
                <a href="#"><img src={iconMovies} alt="movies" /></a>
                <a href="#"><img src={iconSeries} alt="series" /></a>
                <a href="#"><img src={iconBookmark} alt="bookmark" /></a>
            </nav>
            <a href="#"><img className='avatar' src={avatar} alt="avatar" /></a>
        </header>
    )
}

export default Header