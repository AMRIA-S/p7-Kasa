import logoFooter from '../../assets/Images/logoFooter.png'
import '../../Styles/Banner/footer.css'

function Footer() {
    return (
        <footer>
            <img className="footer-img" src={logoFooter} alt="Logo Kasa" />
            <h3 className="footer-titleH3">
                ©️ 2020 Kasa. All rights reserved
            </h3>
        </footer>
    )
}
export default Footer
