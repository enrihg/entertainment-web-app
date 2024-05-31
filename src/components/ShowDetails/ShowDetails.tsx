import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import style from "./ShowDetails.module.css"
import arrowBackIcon from "../../assets/icon-arrow-back.svg"
import Loader from "../Loader/Loader";

function ShowDetails() {
    // const [isLoading, setIsloading] = useState(false);
    const [details, setDetails] = useState([]);
    const [casting, setCasting] = useState([]);
    const { show, id } = useParams();
    const searchShow = (show === 'movies' && 'movie') || (show === 'series' && 'tv');
    const navigate = useNavigate();

    console.log(`GENRES: ${details.genres}`)
    useEffect(function () {
        async function fetchShow() {
            // setIsloading(true)
            const res = await fetch(`https://api.themoviedb.org/3/${searchShow}/${id}?api_key=51c123f4a024f90c136223859b755364`)
            const data = await res.json();
            setDetails(data);
            console.log(data);
            // setIsloading(false)
        }
        fetchShow();
    }, [])

    useEffect(function () {
        async function fetchCasting() {
            const res = await fetch(`https://api.themoviedb.org/3/${searchShow}/${id}/credits?api_key=51c123f4a024f90c136223859b755364`)
            const data = await res.json();
            console.log(data.cast)
            setCasting(data.cast);
        }
        fetchCasting();
    }, [])

    return (
        <article className={style.showDetails}>
            {/* {isLoading ? <Loader /> : */}
            {/* <button onClick={() => navigate(`/${show}`)} className={style.buttonBack}><img src={arrowBackIcon} alt="arrow back" /></button> */}
            <img className={style.poster} src={`https://image.tmdb.org/t/p/original${details.poster_path}`} alt="poster" />
            <div className={style.detailsContainer}>
                <h1 >{details.name || details.title}</h1>
                <p>{details.release_date || details.first_air_date}</p>
                <p>148mins</p>
                <h2>Genres:</h2>
                <ul>
                    {details.genres != undefined && details.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                <h2>Casting:</h2>
                <ul>
                    {casting != undefined && casting.slice(0, 5).map((person) => (
                        <li key={person.credit_id}>{person.name}</li>
                    ))}
                </ul>
                <div className={style.overview}>
                    <h2>Overview:</h2>
                    <p>{details.overview}</p>
                </div>
                <h2>Website:</h2>
                <a href={details.homepage} target="_blank">{details.homepage}</a>
            </div>
        </article>
    )
}

export default ShowDetails