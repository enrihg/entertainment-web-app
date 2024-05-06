import Header from "../Header/Header"
import Search from "../Search/Search"
import "./AppLayout.css"

type ComponentProps = {
    children? : React.ReactNode;
}

function AppLayout({ children }: ComponentProps) {
    return (
        <>
            <Header />
            <main>
                <Search/>
                {children}
            </main>
        </>
    )
}

export default AppLayout