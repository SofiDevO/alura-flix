import styled from "styled-components";
import { useState, useEffect } from "react";
import { colorFrontend } from "./UI/variables";
import { buscar } from "../api/api";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CajaVideo = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
`;
const ImagenVideo = styled.img`
  width: 50rem;
  border: px solid ${colorFrontend};
`;

const VideoLista = () => {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {
    // Hacer la solicitud de todos los videos
    buscar("/videos", (videos) => {
      // Organizar los videos por categoría
      const videosCategorizados = videos.reduce((acc, video) => {
        const categoria = video.categoria;
        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(video);
        return acc;
      }, {});
      setVideosPorCategoria(videosCategorizados);
    });
  }, []);

  return (
    <>
      {Object.keys(videosPorCategoria).map((categoria) => {
        const videos = videosPorCategoria[categoria];
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
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };

        return (
          <div key={categoria}>
            <h2>{categoria}</h2>
            <Slider {...settings}>
              {videos.map((video) => {
                const { id, title, img } = video;
                return (
                  <Link to={`/ver/${id}`} key={id}>
                    <CajaVideo>
                      <article>
                        <ImagenVideo src={img} alt={title} />
                      </article>
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
