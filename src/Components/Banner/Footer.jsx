import logoFooter from '../../assets/Images/logoFooter.png'
import { styled } from 'styled-components'
import { colors } from '../../Styles/globalStyles'

const DivFooter = styled.div`
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    width: 93px;
    padding: 42px 0px 6px 0px;
`

const TextFooter = styled.h3`
    color: ${colors.primary};
    size: 24px;
    font-weight: 500;
`

function Footer() {
    return (
        <DivFooter>
            <Image src={logoFooter} alt="Logo Kasa" />
            <TextFooter>©️ 2020 Kasa. All rights reserved</TextFooter>
        </DivFooter>
    )
}
export default Footer
