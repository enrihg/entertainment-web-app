import style from "./Show.module.css"
import iconBookmarkEmpty from '/src/assets/icon-bookmark-empty.svg'
import { Link } from "react-router-dom";

type ComponentProps = {
    show: {
        name: string,
        title: string,
        first_air_date: string,
        release_date: string,
        poster_path: string,
        id: string

    }
}

function Show({ show }: ComponentProps) {
    const { name, title, first_air_date = "", release_date = "", poster_path: img, id } = show;
    const year = first_air_date.substring(0, 4) || release_date.substring(0, 4);

    return (
        <article className={style.show}>
            <Link to={`${id}`}>
                <div className={style.thumbnail}>
                    <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="picture" />
                    <button className={style.bookmarkIcon}><img src={iconBookmarkEmpty} alt="bookmark icon" /></button>
                </div>
                <div className={style.info}><span>{year}</span><span>.</span><span>serie/tv</span><span>.</span><span>rating</span></div>
                <h3>{name || title}</h3>
            </Link>
        </article>
    )
}

export default Show