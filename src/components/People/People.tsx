import style from "./People.module.css"

type ComponentProps = {
  person: {
    name: string,
    profile_path: string,
  }
}

function People({ person }: ComponentProps) {
  const { name, profile_path: img } = person;

  return (
    <article className={style.people}>
      <div className={style.picture}>
        <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="picture" />
      </div>
      <h3>{name}</h3>
    </article>
  )
}

export default People