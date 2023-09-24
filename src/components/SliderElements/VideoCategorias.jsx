import { useState, useEffect } from "react";
import { buscar } from "../api/api";

const VideoCategorias = ({ children }) => {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar una solicitud a la API para obtener los videos
        const response = await buscar("/videos");

        // Organizar los videos por categoría
        const videosCategorizados = response.reduce((acc, video) => {
          const categoria = video.categorias.nombre; // Acceder al nombre de la categoría

          if (!acc[categoria]) {
            acc[categoria] = [];
          }
          acc[categoria].push(video);
          return acc;
        }, {});

        // Actualizar el estado con los videos organizados por categoría
        setVideosPorCategoria(videosCategorizados);
      } catch (error) {
        console.error("Error al obtener los videos:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{children(videosPorCategoria)}</div>;
};

export default VideoCategorias;
