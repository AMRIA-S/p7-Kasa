import '../../Styles/Card/card.css'
import '../../Styles/Card/card-responsive.css'
import { Link } from 'react-router-dom'

function Card(props) {
    const logement = props.logement
    return (
        <>
            <Link to={'/details/' + logement.id}>
                <figure>
                    <img
                        className="home-imgListLogement"
                        src={logement.cover}
                        alt={logement.title}
                    />
                    <figcaption>
                        <h5>{logement.title}</h5>
                    </figcaption>
                </figure>
            </Link>
        </>
    )
}
export default Card
