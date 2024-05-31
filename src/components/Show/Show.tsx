import style from "./Show.module.css"
import movieIcon from '/src/assets/icon-category-movie.svg'
import tvIcon from '/src/assets/icon-category-tv.svg'
import starIcon from '/src/assets/icon-star.svg'
import iconBookmarkEmpty from '/src/assets/icon-bookmark-empty.svg'
import { Link } from "react-router-dom";

type ComponentProps = {
    show: {
        name: string,
        title: string,
        first_air_date: string,
        release_date: string,
        poster_path: string,
        id: string,
        vote_average: number
    },
    type: string
}

function Show({ show, type }: ComponentProps) {
    const { name, title, first_air_date = "", release_date = "", poster_path: img, id, vote_average: rating } = show;
    const year = first_air_date.substring(0, 4) || release_date.substring(0, 4);
    console.log(show);

    return (
        <article className={style.show}>
            <Link to={`watch/${id}`}>
                <div className={style.thumbnail}>
                    <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="picture" />
                    <button className={style.bookmarkIcon}><img src={iconBookmarkEmpty} alt="bookmark icon" /></button>
                </div>
                <div className={style.info}>
                    <span>{year}</span><span><img src={type == "Movie" ? movieIcon : tvIcon}/>{type}</span><span><img src={starIcon}/>{rating.toFixed(1)}</span>
                </div>
                <h3>{name || title}</h3>
            </Link>
        </article>
    )
}

export default Show