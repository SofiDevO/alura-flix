import { Link} from "react-router-dom";
import logo from "../assets/img/Sofidev_flix_blue.png"


const NavBar = ()=>{
    return(
        <div className="container">
            <Link to="/" >
                <img className="header__logo" src={logo} alt="logo SofiDev"/>
            </Link>
        <div className="header__btn">
            <Link to="/addVideo">
                Nuevo video
            </Link>
        </div>
    </div>
    )
}

export default NavBar