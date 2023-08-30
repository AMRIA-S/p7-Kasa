import { useParams } from 'react-router'

function Details() {
    const { id } = useParams()
    return (
        <main>
            <h1>Details</h1>
            <h2>Id: {id}</h2>
        </main>
    )
}
export default Details
