import style from "./NavigationButtons.module.css"
import { useNavigate, useParams } from "react-router-dom"

type ComponentProps = {
    show: string,
}

function NavigationButtons({ show }: ComponentProps) {
    const navigate = useNavigate();
    const { pageNumber = "1" } = useParams();
    const url1 = `/${show}/page/${Number(pageNumber) - 1}`;
    const url2 = `/${show}/page/${Number(pageNumber) + 1}`;

    return (
        <div className={style.buttonContainer}>
            {pageNumber != "1" && <button className={style.button} onClick={() => navigate(url1)}>Previous</button>}
            <span className={style.currentPage}>{pageNumber}</span>
            <button className={style.button} onClick={() => navigate(url2)}>Next</button>
        </div>
    )
}

export default NavigationButtons