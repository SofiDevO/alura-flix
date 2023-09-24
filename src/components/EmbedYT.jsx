import PropTypes from "prop-types";

// Componente funcional para incrustar un video de YouTube dado un ID de inserción (embedId)
const YoutubeEmbed = ({ embedId }) => (
	<>
		<iframe
			width="80%"
			height="100%"
			src={`https://www.youtube.com/embed/${embedId}/?autoplay=1`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		/>
	</>
);

// Valida que la propiedad 'embedId' sea requerida y debe ser una cadena (string)
YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
