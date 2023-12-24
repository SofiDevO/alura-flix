import NavBar from "./NavBar";

import styled from "styled-components";
import { colorGrayDark, colorPrimario } from "../components/UI/variables";
import { useNavigate } from "react-router-dom";
import { Btn } from "./UI";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <FooterContainer>
        <NavBar />
      </FooterContainer>
      <CajaBtn>
        <Btn variant="blue" size="full" onClick={() => navigate("/add-video")}>
          Nuevo Video
        </Btn>
      </CajaBtn>
    </>
  );
};
export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: ${colorGrayDark};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CajaBtn = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colorPrimario};
  }
`;
