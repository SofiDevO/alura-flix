import PropTypes from "prop-types";




const YoutubeEmbed = ({ embedId }) => (
	<>
		<iframe
			width="90%"
			height="90%"
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
