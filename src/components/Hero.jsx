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
`;

const Hero = () => {
	return (
		<HeroContainer>
			<TextContainer />
			<YoutubeEmbed embedId='JKThdA1UbTw'/>
		</HeroContainer>
	);
};

export default Hero;
