import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react";
import style from "./ShowDetails.module.css"
import arrowBackIcon from "../../assets/icon-arrow-back.svg"
import Loader from "../Loader/Loader";

function ShowDetails() {
    const [isLoading, setIsloading] = useState(false)
    const [details, setDetails] = useState([])
    const { show, id } = useParams();
    const searchShow = (show === 'movies' && 'movie') || (show === 'series' && 'tv');

    console.log(`GENRES: ${details.genres}`)
    useEffect(function () {
        async function fetchMovies() {
            setIsloading(true)
            const res = await fetch(`https://api.themoviedb.org/3/${searchShow}/${id}?api_key=51c123f4a024f90c136223859b755364`)
            const data = await res.json();
            setDetails(data);
            setIsloading(false)
        }
        fetchMovies();
        // fetch(`https://api.themoviedb.org/3/${searchShow}/${id}?api_key=51c123f4a024f90c136223859b755364`)
        //     .then(res => res.json())
        //     .then(data => { console.log(data); setDetails(data) })
        // setIsloading(false)
    }, [])

    return (
        <article className={style.showDetails}>
            {isLoading ? <Loader /> :
                <>
                    <section>
                        <button className={style.buttonBack}><img src={arrowBackIcon} alt="arrow back" /></button>
                        <img className={style.poster} src={`https://image.tmdb.org/t/p/original${details.poster_path}`} alt="poster" />
                        <div>
                            <h1 >{details.name || details.title}</h1>
                            <div><span>{details.release_date || details.first_air_date}</span><span>.</span><span>148 min</span></div>
                            <ul>
                                {/* {`Genres: ${details.genres.map((genre) => {
                            console.log(genre.name);
                            <li>{genre.name}</li>
                        })}`} */}
                            </ul>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae vero consequuntur unde sunt maiores ut inventore itaque, et, deleniti esse accusamus? Alias hic incidunt natus quod necessitatibus, magni enim vel.</p>
                        </div>
                    </section>
                    <section>
                        <p><em>{`Overview: ${details.overview}`}</em></p>
                        <div>{`Website: ${details.homepage}`}</div>
                    </section>
                </>
            }
        </article>
    )
}

export default ShowDetails