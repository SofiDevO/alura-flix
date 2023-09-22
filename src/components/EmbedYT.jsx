import PropTypes from "prop-types";
import styled from "styled-components";



const YoutubeEmbed = ({ embedId }) => (
	<>
		<iframe
			width="80%"
			height="80%"
			src={`https://www.youtube.com/embed/${embedId}/?autoplay=1`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
			
		/>
	</>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
