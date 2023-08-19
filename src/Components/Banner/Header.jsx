import { Link } from 'react-router-dom'
import logoHeader from '../../assets/Images/logoHeader.png'
import { styled } from 'styled-components'
import { colors, size } from '../../Styles/globalStyles'
/*''*/
const LinkHeader = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
    margin-left: 60px;
    font-size: ${size[20]};
    font-weight: 500;
    ${(props) =>
        props.$pageActuelle && `border-bottom: solid 2px ${colors.primary};`};
`

const DivHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 100px;
`

const NavBar = styled.nav`
    display: flex;
    align-content: center;
    flex-wrap: wrap;
`

const Image = styled.img`
    width: 210px;
    height: 68px;
`

function Header() {
    return (
        <DivHeader>
            <Image src={logoHeader} alt="Logo Kasa" />
            <NavBar>
                <LinkHeader to="/">Accueil</LinkHeader>
                <LinkHeader to="/details">A Propos</LinkHeader>
            </NavBar>
        </DivHeader>
    )
}
export default Header
