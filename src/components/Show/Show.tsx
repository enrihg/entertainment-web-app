import style from "./Show.module.css"
import prueba from "/src/assets/thumbnails/beyond-earth/regular/medium.jpg"
import iconBookmarkEmpty from '/src/assets/icon-bookmark-empty.svg'

type ComponentProps = {
    show: {
        name: string,
        title: string,
        first_air_date: string,
        release_date: string
    }
}


function Show({ show: movie }: ComponentProps) {
    const { name, title, first_air_date, release_date } = movie;
    return (
        <article className={style.show}>
            <div className={style.thumbnail}>
                <img src={prueba} alt="picture" />
                <button className={style.bookmarkIcon}><img src={iconBookmarkEmpty} alt="bookmark icon" /></button>
            </div>
            <div className={style.info}><span>{first_air_date || release_date}</span><span>serie/tv</span><span>rating</span></div>
            <h3>{name || title}</h3>
        </article>
    )
}

export default Show