import { Link } from 'react-router-dom'
import logoHeader from '../../assets/Images/logoHeader.png'
import '../../Styles/Banner/Header/header.css'
import '../../Styles/Banner/Header/header-responsive.css'

function Header() {
    return (
        <header>
            <img className="header-img" src={logoHeader} alt="Logo Kasa" />
            <nav className="headerNav">
                <Link className="headerNav-lien" to="/">
                    Accueil
                </Link>
                <Link className="headerNav-lien" to="/apropos">
                    A Propos
                </Link>
            </nav>
        </header>
    )
}
export default Header
