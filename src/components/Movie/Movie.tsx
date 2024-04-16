import style from "./Movie.module.css"

type ComponentProps = {
    category: string,
    isBookmarked: boolean,
    isTrending?: boolean,
    rating: string,
    thumbnail?: {
        trending?: {
            small: string,
            large: string,
        },
        regular?: {
            small: string,
            medium: string,
            large: string
        }
    },
    title: string,
    year: number,
}

function Movie({ category, isBookmarked, isTrending, rating, title, thumbnail, year }: ComponentProps) {
    console.log(thumbnail)
    console.log(isBookmarked)
    console.log(isTrending)
    return (
        <article className={style.movie}>
            <div className={style.thumbnail}>
                <img src={`${thumbnail?.regular?.small}`} alt="picture" />
                <button className={style.bookmarkIcon}><img src="/public/assets/icon-bookmark-empty.svg" alt="bookmark icon" /></button>
            </div>
            <div className={style.info}><span>{year}</span><span>{category}</span><span>{rating}</span></div>
            <h3>{title}</h3>
        </article>
    )

}

export default Movie