import { useState } from 'react'
import { FlecheHaut, FlecheBas } from '../../assets/icon/Fleche'
import '../../Styles/NavBar/navBar.css'
import '../../Styles/NavBar/navBar-responsive.css'

function NavbarEquipements(props) {
    const [open, setOpen] = useState(false)

    return open ? (
        <div className="navBar">
            <button className="navBar-open" onClick={() => setOpen(false)}>
                {props.label} <FlecheHaut />
            </button>
            {props.html}
        </div>
    ) : (
        <button className="navBar-close close" onClick={() => setOpen(true)}>
            {props.label} <FlecheBas />
        </button>
    )
}

export default NavbarEquipements
