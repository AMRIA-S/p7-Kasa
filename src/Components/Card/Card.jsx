import listLogement from '../../AnnoncesLogement/logement.json'
import '../../Styles/Card/card.css'

function Card() {
    return (
        <ul className="home-display">
            {listLogement.map((logement) => (
                <li className="home-listLogement" key={logement.id}>
                    <img
                        className="home-imgListLogement"
                        src={logement.cover}
                        alt="Falaise au bord de la mer"
                    />
                    <h5 className="titre-listLogement">{logement.title}</h5>
                </li>
            ))}
        </ul>
    )
}

export default Card
