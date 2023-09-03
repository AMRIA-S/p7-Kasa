import logoFooter from '../../assets/Images/logoFooter.png'
import '../../Styles/Banner/Footer/footer.css'
import '../../Styles/Banner/Footer/footer-responsive.css'

function Footer() {
    return (
        <footer>
            <figure>
                <img className="footer-img" src={logoFooter} alt="Logo Kasa" />
                <figcaption>
                    <p className="footer-text">
                        ©️ 2020 Kasa. All rights reserved
                    </p>
                </figcaption>
            </figure>
        </footer>
    )
}
export default Footer
