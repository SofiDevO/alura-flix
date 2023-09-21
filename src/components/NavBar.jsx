import { Link } from "react-router-dom";
import logo from "../assets/img/Sofidev_flix_blue.png";
import styled from "styled-components";
	const Logo = styled.img`
		display: flex;
		width: 168.45px;
		height: 40px;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		@media screen and (max-width:768px){
			text-align: center;
		}
	`;

const NavBar = () => {
	return (
			<Link to="/">
				<Logo className="header__logo" src={logo} alt="logo SofiDev" />
			</Link>
	);
};

export default NavBar;
