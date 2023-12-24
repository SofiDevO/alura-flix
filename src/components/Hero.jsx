import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { buscar } from "../api/api";
import { Btn } from "./UI/index";

const Hero = () => {
  const navigate = useNavigate();
  const [videosPorCategoria, setVideosPorCategoria] = useState({});
  const videosPorCategoriaRef = useRef(videosPorCategoria);
  const [videoActual, setVideoActual] = useState(null);

  useEffect(() => {
    const fetchVideos = () => {
      buscar("/videos", (videos) => {
        const videosCategorizados = videos.reduce((acc, video) => {
          const categoria = video.categoria.nombre;
          if (!acc[categoria]) {
            acc[categoria] = [];
          }
          acc[categoria].push(video);
          return acc;
        }, {});
        setVideosPorCategoria(videosCategorizados);
        videosPorCategoriaRef.current = videosCategorizados;
        // Inicializar el video actual al cargar los videos
        actualizarVideoAleatorio();
      });
    };

    const actualizarVideoAleatorio = () => {
      const categorias = Object.keys(videosPorCategoriaRef.current);
      const categoriaAleatoria =
        categorias[Math.floor(Math.random() * categorias.length)];
      const videosEnCategoria =
        videosPorCategoriaRef.current[categoriaAleatoria];
      const videoAleatorio =
        videosEnCategoria[Math.floor(Math.random() * videosEnCategoria.length)];
      setVideoActual(videoAleatorio);
    };

    // Obtener los videos al montar el componente
    fetchVideos();

    // Establecer un temporizador para cambiar el video cada 2 segundos
    const intervalId = setInterval(() => {
      actualizarVideoAleatorio();
    }, 6000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const { id, title, img, categoria, metadescription } = videoActual || {};

  const handleVideoClick = () => {
    // Navegar al enlace del video actual
    navigate(`/videos/${id}`);
  };

  return (
    <HeroContainer>
      <CajaTexto>
        <Titulo>{title}</Titulo>
        <Styledh3 style={{ backgroundColor: categoria?.color }}>
          {categoria?.nombre}
        </Styledh3>
        <Parrafo>{metadescription}</Parrafo>
      </CajaTexto>
      <CajaBtn>
        <Btn onClick={handleVideoClick} backgroundColor={categoria?.color}>
          ver
        </Btn>
      </CajaBtn>
      <ContenedorYT>
        <Link to={`/videos/${id}`} onClick={handleVideoClick}>
          <ImagenVideo
            src={`http://img.youtube.com/vi/${img}/maxresdefault.jpg`}
            alt={title}
            borderColor={categoria?.color}
          />
        </Link>
      </ContenedorYT>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 111dvh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-image: linear-gradient(236deg, rgb(0 0 16) 21%, rgb(0 0 0) 57%);
  justify-content: space-between;
  padding-top: 1rem;
  transition: all 2s ease;
  @media screen and (max-width: 768px) {
    height: 100dvh;
    justify-content: center;
    align-content: center;
    width: 100%;
    flex-direction: column;
  }
`;

const CajaTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  color: white;
  padding: 0 2.8rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const Titulo = styled.h1`
  flex-shrink: 0;
  font-family: "Roboto";
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: normal;
  border-radius: 0.4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    /* display: none; */
    font-size: 3rem;
  }
`;

const Styledh3 = styled.h3`
  width: 100%;
  max-width: 30rem;
  align-self: flex-start;
  padding: 1rem 3rem;
  margin-bottom: 2rem;
  border-radius: 6px;
  font-family: "Montserrat";
  font-size: 4.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 2.6rem;
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

const ImagenVideo = styled.img`
  width: 91%;
  border: 3px solid ${(props) => props.borderColor};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CajaBtn = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const ContenedorYT = styled.div`
  display: block;
  width: 100%;
  max-width: 775px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Hero;
