import AproposImg from '../assets/Images/AproposImg.png'
import NavBar from '../Components/Navbar/Navbar'
import '../Styles/APropos/aPropos.css'
import '../Styles/APropos/aPropos-responsive.css'
function Apropos() {
    return (
        <main>
            <section className="apropos">
                <img
                    src={AproposImg}
                    alt="paysage avec des sapins et montagnes"
                />
            </section>
            <section className="section-navBar">
                <NavBar
                    label={'Fiabilité'}
                    html={
                        <p>
                            Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes.
                        </p>
                    }
                />
                <NavBar
                    label={'Respect'}
                    html={
                        <p>
                            La bienveillance fait partie des valeurs fondatrices
                            de Kasa. Tout comportement discriminatoire ou de
                            perturbation du voisinage entraînera une exclusion
                            de notre plateforme.
                        </p>
                    }
                />
                <NavBar
                    label={'Service'}
                    html={
                        <p>
                            Nos équipes se tiennent à votre disposition pour
                            vous fournir une expérience parfaite. N'hésitez pas
                            à nous contacter si vous avez la moindre question.
                        </p>
                    }
                />
                <NavBar
                    label={'Sécurité'}
                    html={
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour
                            nos hôtes que pour les voyageurs, chaque logement
                            correspond aux critères de sécurité établis par nos
                            services. En laissant une note aussi bien à l'hôte
                            qu'au locataire, cela permet à nos équipes de
                            vérifier que les standards sont bien respectés. Nous
                            organisons également des ateliers sur la sécurité
                            domestique pour nos hôtes.
                        </p>
                    }
                />
            </section>
        </main>
    )
}
export default Apropos
