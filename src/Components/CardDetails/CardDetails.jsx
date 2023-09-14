import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import listLogement from '../../AnnoncesLogement/logement'
import Tag from '../Tag/Tag'
import '../../assets/Styles/CardDetails/cardDetails.css'
import '../../assets/Styles/CardDetails/cardDetails-responsive.css'
import { FlecheGauche, FlecheDroite } from '../Etoile/icon/Fleche'
import { EtoileActif, EtoileInactif } from '../Etoile/icon/Etoile'
import Navbar from '../Navbar/Navbar'

function CardDetails() {
    const { id } = useParams()
    const appartement = listLogement.find(
        (appartement) => appartement.id === id
    )
    const [nextImage, setNextImage] = useState(0)

    // Redirection page Error
    if (!appartement) {
        return <Navigate to="/error" />
    }

    // Button avec l'utilisation state
    const imageSuivante = () => {
        setNextImage(
            nextImage === appartement.pictures.length - 1 ? 0 : nextImage + 1
        )
    }
    const imagePrecedente = () => {
        setNextImage(
            nextImage === 0 ? appartement.pictures.length - 1 : nextImage - 1
        )
    }

    const styles = {
        displayNone: {
            display: appartement.pictures.length === 1 ? 'none' : 'block',
        },
    }
    const stars = [1, 2, 3, 4, 5]

    return (
        <>
            <section className="pageDetails-carrousel">
                <figure>
                    <ul>
                        {appartement.pictures.map((picture, index) => (
                            <li key={`${picture}-${index}`}>
                                {index === nextImage && (
                                    <img
                                        className="carrousel-image"
                                        src={picture}
                                        alt={appartement.title}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                    <figcaption>
                        <p style={styles.displayNone}>
                            {nextImage + 1}/{appartement.pictures.length}
                        </p>
                    </figcaption>
                </figure>
                <button
                    className="carrousel-button left"
                    style={styles.displayNone}
                    onClick={imagePrecedente}
                >
                    <FlecheGauche />
                </button>
                <button
                    className="carrousel-button right"
                    style={styles.displayNone}
                    onClick={imageSuivante}
                >
                    <FlecheDroite />
                </button>
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
