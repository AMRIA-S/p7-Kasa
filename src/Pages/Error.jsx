import { Link } from 'react-router-dom'
import '../Styles/Error/error.css'
import '../Styles/Error/error-responsive.css'
function Error() {
    return (
        <main className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <div className="error-lienPageHome">
                <Link to={'/'}>Retourner sur la page d'accueil</Link>
            </div>
        </main>
    )
}
export default Error
