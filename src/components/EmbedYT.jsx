import PropTypes from "prop-types";
import styled from "styled-components";

const YouTubeResponsive = styled.div`
	border-radius: 0.4rem;
	flex-shrink: 0;
	border: 4px solid var(----color-frontend, #6bd1ff);

`;

const YoutubeEmbed = ({ embedId }) => (
	<YouTubeResponsive>
		<iframe
			width="553"
			height="290"
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
