import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Hero = () => {
	return (
		<div className="hero">
			<div>
				<h1>Front End</h1>
				<h3>Entorno de Desarrollo con Windows</h3>
				<p>
					Con este curso aprenderás a preparar tu equipo con las herramientas
					necesarias para empezar a programar o comenzar a aprender. Vamos a
					hacer las configuraciones necesarias para que puedas crear un proyecto
					sin mayores obstáculos. También aprenderás a moverte en la terminal.
					este es un curso para principiantes 🐣
				</p>
			</div>
			<div>
				<LiteYouTubeEmbed id="tSVyfcpJ1yc" title="Tutorial Modo oscuro" />
			</div>
		</div>
	);
};

export default Hero;
