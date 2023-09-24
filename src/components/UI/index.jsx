import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { colorGrayLigther, colorGrayLight, colorPrimario } from "./variables";
isPropValid("size");

export const Btn = styled.button`
	width: 18rem;
	height: 5.4rem;
	flex-shrink: 0;
	text-align: center;
	font-family: "Roboto";
	font-size: 2.1rem;
	font-style: normal;
	font-weight: 600;
	border: none;
	border-radius: 0.5rem;
	background-color: ${(props) =>
		props.variant === "blue" ? "#2A7AE4" : "#dedede"};
	color: ${(props) => (props.variant === "blue" ? "#f5f5f5" : "#000000")};
	@media screen and (max-width: 768px) {
		width: ${(props) => (props.size === "full" ? " 320px" : "14rem")};
		font-size: 1.5rem;
	}
`;

/* Elementos del formulario */

export const Container = styled.div`
	height: 59vh;

	color: #f5f5f5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1.8rem;
`;

export const FormularioTitulo = styled.h2`
	text-align: center;
	font-family: Roboto;
	font-size: 6rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	padding: 4rem 0;
`;

export const ElementosFormulario = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 4rem;
`;
export const TextoLabel = styled.label`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	font-family: Roboto;
	font-size: 12px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	padding: 1rem 2rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	/* gap: 5rem; */
	height: 20rem;
`;
export const CajaInputs = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 107px;
	flex-shrink: 0;
`;
export const ContainerInput = styled.div`
	background-color: ${colorGrayLight};
	align-items: center;
	border-radius: 0px 0px 4px 4px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Select = styled.select`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	text-align: center;
	z-index: 20;
	font-size: 1.9rem;
	color: ${colorGrayLigther};
	padding: 1rem;
	outline: none;
	border: none;
	background: ${colorGrayLight};
	font-weight: 800;
	padding: 1rem 5rem;
`;

export const TextAreaWrapper = styled.textarea`
	width: 100%;
	height: 130px;
	border: none;
	padding: 8px;
	font-size: 16px;
	outline: none;
	resize: none;
	background-color: ${colorGrayLight};
`;

export const BarraError = styled.span`
	border-bottom: 3px solid;
	border-color: ${(props) => (props.variant === "red" ? "#ff6347" : "#2A7AE4")};
	width: 100%;
	`;

	export const SpanMensaje = styled.span`
		color: ${(props) => (props.variant === "red" ? "#ff6347" : "#2A7AE4")};
		@media screen and (max-width:768px) {
		font-size: 1.3rem	
	}
	`
	

export const CajaBotones = styled.div`
	    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10rem;
    padding: 0;
    justify-content: center;
`;
export const ContenedorBotones = styled.div`
	display: flex;
	justify-content: space-between;
	width: 81%;
	align-items: flex-end;
	padding: 0 0 5rem;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const EviarLimpiar = styled.div`
	display: flex;
    align-items: center;
    margin-top: 10rem;
    padding: 0;
    width: 30%;
    justify-content: space-between;
    flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		align-items: center;
		display: flex;

		margin-top: 10rem;
		padding: 13px;
		width: 100%;
		justify-content: space-evenly;
		gap: 1rem;
	}
`;

export const InputSubmit = styled.input`
	color: ${colorGrayLigther};
	width: 18rem;
	height: 5.4rem;
	flex-shrink: 0;
	text-align: center;
	font-family: "Roboto";
	font-size: 2.1rem;
	font-style: normal;
	font-weight: 600;
	border: none;
	border-radius: 0.5rem;
	background-color: ${colorPrimario};
	@media screen and (max-width: 768px) {
		width: 14rem;
		font-size: 1.5rem;
	}
`;
