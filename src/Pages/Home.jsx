import homeImg from '../assets/Images/homeImg.png'
import '../Styles/Home/home.css'
import '../Styles/Home/home-responsive.css'
import Card from '../Components/Card/Card'
import listLogement from '../AnnoncesLogement/logement'

function Home() {
    return (
        <main>
            <section className="home">
                <figure>
                    <img src={homeImg} alt="Falaise au bord de la mer" />

                    <figcaption>
                        <h1>Chez vous, partout et ailleurs</h1>
                    </figcaption>
                </figure>
            </section>
            <section className="section-listAppartement">
                <ul>
                    {listLogement.map((logement) => (
                        <li key={logement.id} className="home-display">
                            <Card logement={logement} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Home
