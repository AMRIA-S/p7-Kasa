import homeImg from '../assets/Images/homeImg.png'
import '../Styles/Home/home.css'
import '../Styles/Home/home-responsive.css'
import Card from '../Components/Card/Card'

function Home() {
    return (
        <main>
            <div>
                <img
                    className="home-img"
                    src={homeImg}
                    alt="Falaise au bord de la mer"
                />
                <h1 className="home-title">Chez vous, partout et ailleurs</h1>
            </div>
            <section className="section-listAppartement">
                <Card />
            </section>
        </main>
    )
}

export default Home
