import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Bookmarks from './pages/Bookmarks'
import PageNotFound from './pages/PageNotFound'

function App() {
    const [bookmark, setBookmark] = useState("holis");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
