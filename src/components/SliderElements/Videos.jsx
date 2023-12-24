import styled from "styled-components";
import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoLista = () => {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {
    // Realiza una solicitud para obtener la lista de videos desde la API cuando se monta el componente
    buscar("/videos", (videos) => {
      // Organizar los videos por categoría
      const videosCategorizados = videos.reduce((acc, video) => {
        const categoria = video.categoria.nombre; // Acceder al nombre de la categoría

        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(video);
        return acc;
      }, {});

      // Establece el estado con los videos organizados por categoría
      setVideosPorCategoria(videosCategorizados);
    });
  }, []);

  // Configuración del carrousel de videos
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {Object.keys(videosPorCategoria).map((categoria) => {
        const videos = videosPorCategoria[categoria];
        return (
          <div key={categoria}>
            {/* Renderiza el título de la categoría con el color de fondo */}
            <CategoriaTitulo color={videos[0].categoria.color}>
              {categoria}
            </CategoriaTitulo>
            <Slider {...settings}>
              {videos.map((video) => {
                const { id, title, img, categoria } = video;
                return (
                  // Renderiza un enlace a la página de detalle de video
                  <Link to={`/videos/${id}`} key={id}>
                    <CajaVideo>
                      {/* Renderiza la imagen del video con un borde del color de la categoría */}
                      <ImagenVideo
                        src={`http://img.youtube.com/vi/${img}/maxresdefault.jpg`}
                        alt={title}
                        style={{ borderColor: categoria.color }}
                      />
                    </CajaVideo>
                  </Link>
                );
              })}
            </Slider>
          </div>
        );
      })}
    </>
  );
};

export default VideoLista;

// Estilos CSS con styled-components
const CajaVideo = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: center;
  :hover {
    transform: scale(1.1); // Efecto de escala al pasar el ratón sobre el video
  }
`;
const ImagenVideo = styled.img`
  width: 97%;
  border: 3px solid ${(props) => props.borderColor}; // Establece el color del borde con base en la categoría
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const CategoriaTitulo = styled.h3`
  text-align: center;
  display: flex;
  width: 19.3043rem;
  height: 6rem;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: ${(props) =>
    props.color}; // Establece el color de fondo con base en la categoría
`;
