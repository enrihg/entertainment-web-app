import Header from "../Header/Header"
import Search from "../Search/Search"
import "./AppLayout.css"

function AppLayout({ children }) {
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