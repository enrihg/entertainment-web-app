import style from "./People.module.css"
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

        profile_path: string,
    }
}

function People({ show }: ComponentProps) {
    // const { name, title, first_air_date = "", release_date = "", poster_path: img, id, profile_path: img2} = show;
    // const year = first_air_date.substring(0, 4) || release_date.substring(0, 4);

    // return (
    //     <article className={style.show}>
    //         <Link to={`watch/${id}`}>
    //             <div className={style.thumbnail}>
    //                 <img src={`https://image.tmdb.org/t/p/original/${img || img2}`} alt="picture" />
    //                 <button className={style.bookmarkIcon}><img src={iconBookmarkEmpty} alt="bookmark icon" /></button>
    //             </div>
    //             <div className={style.info}><span>{year}</span><span>.</span><span>serie/tv</span><span>.</span><span>rating</span></div>
    //             <h3>{name || title}</h3>
    //         </Link>
    //     </article>
    // )
    return(
        <h1 className={style.people}>Holissssssssss</h1>
    )
}

export default People