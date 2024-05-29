import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Bookmarks from './pages/Bookmarks'
import PageNotFound from './pages/PageNotFound'
import ShowDetails from './components/ShowDetails/ShowDetails'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} >
                    <Route path="page/:pageNumber" element={<Movies />} />
                </Route>
                <Route path="/series" element={<Series />}>
                    <Route path="page/:pageNumber" element={<Series />} />
                </Route>
                <Route path="/:show/:watch/:id" element={<ShowDetails />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App