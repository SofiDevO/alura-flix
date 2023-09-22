import styled from "styled-components";

const CajaTexto = styled.div`
	display: flex;
	flex-direction: column;
	width: 66.1rem;
	color: white;
	padding: 0 2.8rem;
`;
const Titulo = styled.h1`
	display: flex;
	width: 29.6rem;
	height: 9.2rem;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
	font-family: "Roboto";
	font-size: 6rem;
	font-style: normal;
	font-weight: 400;
	text-align: center;
	line-height: normal;
	border-radius: 0.4rem;
	background: #6bd1ff;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Styledh3 = styled.h3`
	font-family: Roboto;
	font-size: 4.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	padding-top: 4rem;
	@media screen and (max-width: 768px) {
		font-size: 2.7rem;
		text-align: center;
	}
`;
const Parrafo = styled.p`
	font-family: Roboto;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	padding: 0.9rem;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const TextContainer = () => {
	return (
		<CajaTexto>
			<Titulo>Front End</Titulo>
			<Styledh3>Curso WSL</Styledh3>
			<Parrafo>
				Con este curso aprenderás a preparar tu equipo con las herramientas
				necesarias para empezar a programar o comenzar a aprender. Vamos a hacer
				las configuraciones necesarias para que puedas crear un proyecto sin
				mayores obstáculos. También aprenderás a moverte en la terminal. este es
				un curso para principiantes 🐣
			</Parrafo>
			
		</CajaTexto>
	);
};

export default TextContainer;
