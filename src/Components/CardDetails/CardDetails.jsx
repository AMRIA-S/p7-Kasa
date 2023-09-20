import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import listLogement from '../../AnnoncesLogement/logement'
import Tag from '../Tag/Tag'
import '../../assets/Styles/CardDetails/cardDetails.css'
import '../../assets/Styles/CardDetails/cardDetails-responsive.css'
import { EtoileActif, EtoileInactif } from '../icon/Etoile'
import Navbar from '../Navbar/Navbar'
import Carrousel from '../Carrousel/Carrousel'

function CardDetails() {
    const { id } = useParams()
    const appartement = listLogement.find(
        (appartement) => appartement.id === id
    )

    // Redirection page Error
    if (!appartement) {
        return <Navigate to="/error" />
    }

    const stars = [1, 2, 3, 4, 5]

    return (
        <>
            <section className="pageDetails-carrousel">
                <Carrousel appartement={appartement} />
            </section>
            <section className="pageDetails-informations">
                <h1>{appartement.title}</h1>
                <h2>{appartement.location}</h2>
                <ul className="pageDetails-tags">
                    {appartement.tags.map((tag, index) => (
                        <Tag key={`${tag}-${index}`} tag={tag} />
                    ))}
                </ul>
                <div className="pageDetails-flexStars">
                    <div className="pageDetails-host">
                        <h3>{appartement.host.name}</h3>
                        <img
                            src={appartement.host.picture}
                            alt={'image de ' + appartement.host.name}
                        />
                    </div>

                    <div className="pageDetails-rating">
                        {stars.map((star, index) => (
                            <span key={`${star}-${index}`}>
                                {appartement.rating >= star ? (
                                    <EtoileActif />
                                ) : (
                                    <EtoileInactif />
                                )}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pageDetails-navBar">
                    <Navbar
                        label={'Description'}
                        html={<p>{appartement.description}</p>}
                    />
                    <Navbar
                        label={'Équipements'}
                        html={
                            <ul>
                                {appartement.equipments.map(
                                    (equipment, index) => (
                                        <li key={`${equipment}-${index}`}>
                                            {equipment}
                                        </li>
                                    )
                                )}
                            </ul>
                        }
                    />
                </div>
            </section>
        </>
    )
}
export default CardDetails
