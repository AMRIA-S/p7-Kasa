import { useState } from 'react'
import { FlecheGauche, FlecheDroite } from '../icon/Fleche'

function Carrousel(props) {
    const appartement = props.appartement
    // Button avec l'utilisation state
    const [nextImage, setNextImage] = useState(0)
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

    return (
        <>
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
        </>
    )
}

export default Carrousel
