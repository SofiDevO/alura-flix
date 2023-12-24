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
  height: 179vh;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  width: 86%;

  justify-content: space-evenly;
  height: auto;
  padding-top: 4rem;
  height: 96dvh;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
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
`;
export const CajaInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
  color: white;
  padding: 1rem;
  outline: none;
  border: none;
  background: #3e3e3e;
  font-weight: 800;
  padding: 1rem 5rem;
`;

export const TextAreaWrapper = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  padding: 8px;
  font-size: 16px;
  outline: none;
  resize: none;
  background-color: ${colorGrayLight};
  color: ${colorGrayLigther};
  font-size: 1%.6;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const BarraError = styled.span`
  border-bottom: 3px solid;
  border-color: ${(props) => (props.variant === "red" ? "#ff6347" : "#2A7AE4")};
  width: 100%;
`;

export const SpanMensaje = styled.span`
  color: ${(props) => (props.variant === "red" ? "#ff6347" : "#2A7AE4")};
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const CajaBotones = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10rem;
  padding: 0;
  justify-content: center;
  @media screen and (max-width: 678px) {
    margin-top: 2rem;
  }
`;
export const ContenedorBotones = styled.div`
  display: flex;
  justify-content: space-between;
  width: 69%;
  align-items: center;
  padding: 5rem 0 2rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0;
    margin: 0;
    justify-content: center;
    width: 100%;
  }
`;

export const EviarLimpiar = styled.div`
  display: flex;
  align-items: center;

  padding: 0;
  width: 50%;
  justify-content: space-between;
  flex-direction: row;
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
