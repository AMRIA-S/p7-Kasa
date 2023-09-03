import listLogement from '../../AnnoncesLogement/logement.json'
import '../../Styles/Card/card.css'
import '../../Styles/Card/card-responsive.css'
import { Link } from 'react-router-dom'

function Card() {
    return listLogement.map((appartement, index) => (
        <Link
            key={`${appartement.id}-${index}`}
            to={'/details/' + appartement.id}
        >
            <figure>
                <img
                    className="home-imgListLogement"
                    src={appartement.cover}
                    alt={appartement.title}
                />
                <figcaption>
                    <h5>{appartement.title}</h5>
                </figcaption>
            </figure>
        </Link>
    ))
}

export default Card
