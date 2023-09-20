import { Link } from "react-router-dom";
import logo from "../assets/img/Sofidev_flix_blue.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
	const navigate = useNavigate();
	const Container = styled.div`
            display: flex;
            justify-content: space-between;
            width: 97%;
            align-items: center;
            padding: 0;
            height: 10vh;
            padding: 0 2rem;
		.header__logo {
			display: flex;
width: 168.45px;
height: 40px;
justify-content: center;
align-items: center;
flex-shrink: 0;
		}
	`;
	return (
		<Container>
			<Link to="/">
				<img className="header__logo" src={logo} alt="logo SofiDev" />
			</Link>
			<div className="header__btn">
				<button onClick={() => navigate("/add-video")}>Nuevo Video</button>
			</div>
		</Container>
	);
};

export default NavBar;
