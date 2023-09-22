import styled from "styled-components";
import TextContainer from "./TextContainer";
import YoutubeEmbed from "./EmbedYT";

const HeroContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	height: 83.2rem;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
	background-image: linear-gradient(
			90deg,
			rgba(1, 8, 22, 0.811) 59%,
			rgba(0, 5, 13, 0.849) 95%
		),
		url("/src/assets/img/JAVASCRIPT.png");
	YoutubeEmbed {
	}
	@media screen and (max-width: 768px) {
		height: 25.8072rem;
		align-content: flex-end;
		
	}
`;

const ContenedorYT = styled.div`
	display: block;
	
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Hero = () => {
	return (
		<HeroContainer>
			<TextContainer />
			<ContenedorYT>
				<YoutubeEmbed embedId="JKThdA1UbTw" />
			</ContenedorYT>
		</HeroContainer>
	);
};

export default Hero;
