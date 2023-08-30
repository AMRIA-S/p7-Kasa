import listLogement from '../../AnnoncesLogement/logement.json'
import '../../Styles/Card/card.css'
import '../../Styles/Card/card-responsive.css'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <ul className="home-display">
            {listLogement.map((appartement, index) => (
                <Link
                    key={`${appartement.id}-${index}`}
                    to={'/details/' + appartement.id}
                >
                    <li>
                        <img
                            className="home-imgListLogement"
                            src={appartement.cover}
                            alt="Falaise au bord de la mer"
                        />
                        <h5>{appartement.title}</h5>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Card
