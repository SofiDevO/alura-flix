import PropTypes from "prop-types";
import styled from "styled-components";

const YouTubeResponsive = styled.div`
	border-radius: 0.4rem;
	flex-shrink: 0;
	width: 50rem;
	height: 29rem;
	@media screen and (max-width:768px) {
		width: 30rem;
	height: 20rem;
	}
`;

const YoutubeEmbed = ({ embedId }) => (
	<YouTubeResponsive>
		<iframe
			width="100%"
			height="100%"
			src={`https://www.youtube.com/embed/${embedId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		/>
	</YouTubeResponsive>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
