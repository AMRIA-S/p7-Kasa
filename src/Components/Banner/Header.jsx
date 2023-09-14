import { Link } from 'react-router-dom'
import logoHeader from '../../assets/Images/logoHeader.png'
import '../../assets/Styles/Banner/Header/header.css'
import '../../assets/Styles/Banner/Header/header-responsive.css'
import { useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()

    if (location.pathname === '/' || location.pathname === '/apropos') {
    }
    return (
        <header>
            <img className="header-img" src={logoHeader} alt="Logo Kasa" />
            <nav className="headerNav">
                <Link
                    to="/"
                    className={
                        location.pathname === '/'
                            ? 'headerNav-lien active'
                            : 'headerNav-lien'
                    }
                >
                    Accueil
                </Link>
                <Link
                    to="/apropos"
                    className={
                        location.pathname === '/apropos'
                            ? 'headerNav-lien active'
                            : 'headerNav-lien'
                    }
                >
                    A Propos
                </Link>
            </nav>
        </header>
    )
}
export default Header
