import style from './DisplayShows.module.css'

type ComponentProps = {
    children: React.ReactNode;
}

function DisplayShows( {children} :ComponentProps) {
    return(
        <section className={style.section}>
            { children }
        </section>
    )
}

export default DisplayShows