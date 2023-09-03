import Appartement from '../../AnnoncesLogement/logement.json'
import { useParams } from 'react-router'

function CardDetails() {
    const { id } = useParams()

    return (
        <main>
            <h1>id: {id}</h1>
            <p></p>
        </main>
    )
}
export default CardDetails
