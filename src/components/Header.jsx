import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  colorGrayDark,
  colorGrayLight,
  colorGrayLigther,
} from "./UI/variables";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Verificar si la ruta actual es "/add-video"
  const isAddVideoRoute = location.pathname === "/add-video";

  // Si estamos en la ruta "/add-video", no mostramos el botón
  if (isAddVideoRoute) {
    return (
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>
    );
  }

  // Si no estamos en la ruta "/add-video", mostramos el botón
  return (
    <HeaderContainer>
      <NavBar />
      <BtnHeader onClick={() => navigate("/add-video")}>Nuevo Video</BtnHeader>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.9rem;
  border-bottom: 1px solid #00daff78;
  background: #0000007d;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 10;
  backdrop-filter: blur(15px);
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 6rem;
  }
`;

const BtnHeader = styled.button`
  width: 180.125px;
  display: block;
  height: 54px;
  flex-shrink: 0;
  background-color: ${colorGrayDark};
  color: ${colorGrayLight};
  border: 1px solid ${colorGrayLigther};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
