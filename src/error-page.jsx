import gif from "./../public/img/sofidev_laptop.gif";
import styled from "styled-components";
import { Btn } from "./components/UI";
import { useNavigate } from "react-router-dom";
import { colorGrayDark, colorGrayLigther } from "./components/UI/variables";

const CajaError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: ${colorGrayLigther};
`;
const TituloError = styled.h1`
  font-size: 10rem;
  padding: 3rem;
  color: ${colorGrayDark};
`;
const ParrafoError = styled.p`
  font-size: 2rem;
`;

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <CajaError id="error-page">
      <TituloError>Oops!</TituloError>
      <ParrafoError>Lo siento, ha ocurrido un error inesperado.</ParrafoError>
      <img src={gif} alt="sofi pixel icon" />
      <Btn onClick={() => navigate("/")}>Volver</Btn>
    </CajaError>
  );
};
export default ErrorPage;
