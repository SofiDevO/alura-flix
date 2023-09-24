import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { colorGrayLigther, colorGrayMedium, colorGrayLight, colorPrimario } from "./variables";
isPropValid("size");

export const Btn = styled.button`
	width: ${(props) => (props.size === "full" ? " 320px" : "18rem")};
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
`;

/* Elementos del formulario */

export const Container = styled.div`
	background: ${colorGrayMedium};
	height: 111vh;
	color: ${colorGrayLigther};
`;

export const FormularioTitulo = styled.h2`
	text-align: center;
	font-family: Roboto;
	font-size: 60px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	padding: 8rem;
`;

export const Form = styled.form`
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* gap: 5rem; */
    height: 64rem;
`;
export const CajaInputs = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 50px;
	flex-shrink: 0;
`
export const ContainerInput = styled.div`
	background-color: ${colorGrayLight};
	align-items: center;
	border-radius: 0px 0px 4px 4px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;




export const Input = styled.input`
	width: 100%;
	height: 50px;
	flex-shrink: 0;
	background-color: ${colorGrayLight};
	display: flex;
	height: 32px;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
	border: none;
	outline-style: none;
`;
