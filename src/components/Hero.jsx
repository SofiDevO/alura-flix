import styled from "styled-components";
import TextContainer from "./TextContainer";
import { Link } from "react-router-dom";
import portada from "../assets/img/portadaVideoYT.jpg"
import heroImg from "../assets/img/JAVASCRIPT.png"
import { useNavigate } from "react-router-dom";
import { Btn } from "./UI";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<HeroContainer>
			<TextContainer />
			<CajaBtn>
			<Btn onClick={()=>navigate('/videos/11')}>ver</Btn>
			</CajaBtn>

			<ContenedorYT>
				<Link to={"/videos/11"}>
				<PortadaYT src={portada} alt="portada YouTube" />
				</Link>
			</ContenedorYT>
		</HeroContainer>
	);
};

export default Hero;

const HeroContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	height: 100rem;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
	background-image: linear-gradient(
			90deg,
			rgba(1, 8, 22, 0.811) 59%,
			rgba(0, 5, 13, 0.849) 95%
		),
		url(${heroImg});
	YoutubeEmbed {
	}
	
	@media screen and (max-width: 768px) {
		height: 31.8072rem;
		align-content: flex-end;
		padding: 2rem 0;
	}
`;

const ContenedorYT = styled.div`
	display: block;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const CajaBtn = styled.div`
	display: none;
	@media screen and (max-width:768px) {
		display: block;
	}
`

const PortadaYT = styled.img`
	width: 59rem;
`