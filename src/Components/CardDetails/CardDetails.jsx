import { useParams } from 'react-router'
import listLogement from '../../AnnoncesLogement/logement'
import { Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from '../../assets/icon/Arrow'
import React, { useState } from 'react'

function CardDetails(images) {
    const { id } = useParams()
    const appartement = listLogement.find((ex) => ex.id === id)
    const [image, setImage] = useState(0)
    // const [previousPicture, setPreviewPicture] = useState(
    //     appartement.pictures[0]
    // )

    if (!appartement) {
        return <Navigate to="/error" />
    }
    const imageSuivante = () => {
        setImage(image === appartement.pictures.length - 1 ? 0 : image + 1)
    }
    const imagePrecedente = () => {
        setImage(image === 0 ? appartement.pictures.length - 1 : image - 1)
    }

    // {appartement.pictures.map((appart, index) => ())}
    return (
        <section className="fiche-logement">
            <ul>
                <button onClick={imagePrecedente}>
                    <ArrowLeft />
                </button>

                {appartement.pictures.map((images, index) => (
                    <li key={`${images}-${index}`}>
                        {index === image && (
                            <img src={images} alt={appartement.title} />
                        )}
                    </li>
                ))}
                <button onClick={imageSuivante}>
                    <ArrowRight />
                </button>
            </ul>
            <h1>{appartement.title}</h1>
            <h2>{appartement.location}</h2>
        </section>
    )
}
export default CardDetails
