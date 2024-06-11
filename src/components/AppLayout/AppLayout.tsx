import Header from "../Header/Header"
import Search from "../Search/Search"
import style from "./AppLayout.module.css"

type ComponentProps = {
    children? : React.ReactNode;
}

function AppLayout({ children }: ComponentProps) {
    return (
        <div className={style.appLayoutContainer}>
            <Header />
            <main className={style.main}>
                <Search/>
                {children}
            </main>
        </div>
    )
}

export default AppLayout