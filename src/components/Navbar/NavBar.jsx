import Style from './navbar.module.css'
import logo from '../../../public/images/logo.png'
import { Phone } from 'lucide-react'

const NavBar = () => {
    return (
        <div className={Style.container}>
            <div>
                <img src={logo} alt="logo" style={{ width: "100px", height: "32px" }} />
            </div>
            <div>
                <div className={Style.box}>
                    <Phone size={26} color="#F2B304" strokeWidth={1.5} />
                </div>
            </div>
        </div>
    )
}

export default NavBar
