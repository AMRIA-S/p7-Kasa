import { useState } from 'react'
import { FlecheHaut, FlecheBas } from '../icon/Fleche'
import '../../assets/Styles/NavBar/navBar.css'
import '../../assets/Styles/NavBar/navBar-responsive.css'

function Navbar(props) {
    const [open, setOpen] = useState(false)

    return open ? (
        <div className="navBar">
            <button
                className={open ? 'navBar-open' : 'navBar-close close'}
                onClick={() => setOpen(!open)}
            >
                {props.label} {open ? <FlecheHaut /> : <FlecheBas />}
            </button>
            {open ? props.html : null}
        </div>
    ) : (
        <button className="navBar-close close" onClick={() => setOpen(true)}>
            {props.label} <FlecheBas />
        </button>
    )
}

export default Navbar
