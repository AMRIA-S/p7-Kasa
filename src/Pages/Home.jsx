import homeImg from '../assets/Images/homeImg.png'
import '../Styles/Home/home.css'
import '../Styles/Home/home-responsive.css'
import Cards from '../Components/Cards/Cards'

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
                    <li className="home-display">
                        <Cards />
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Home
