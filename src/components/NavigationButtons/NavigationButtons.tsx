import style from "./NavigationButtons.module.css"
import { useNavigate } from "react-router-dom"

type ComponentProps = {
    pageNumber: string,
    url1: string,
    url2: string
}

function NavigationButtons({ pageNumber, url1, url2 }: ComponentProps) {
    const navigate = useNavigate();

    return (
        <div className={style.buttonContainer}>
            {pageNumber != "1" && <button className={style.button} onClick={() => navigate(url1)}>Previous</button>}
            <span className={style.currentPage}>{pageNumber}</span>
            <button className={style.button} onClick={() => navigate(url2)}>Next</button>
        </div>
    )
}

export default NavigationButtons