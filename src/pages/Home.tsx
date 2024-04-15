import Header from "../components/Header/Header"
import Search from "../components/Search/Search"

function Home() {
    return (
        <>
            <Header />
            <main>
                <Search />
                <h1>Home!</h1>
            </main>
        </>
    )
}

export default Home