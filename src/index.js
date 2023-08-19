import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importation Police Monserrat
import './Styles/Index.css'

// Pages et Components
import Home from './Pages/Homes'
import Error from './Pages/Error'
import Details from './Pages/Details'
import Header from './Components/Banner/Header'
import Footer from './Components/Banner/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/details" element={<Details />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)
