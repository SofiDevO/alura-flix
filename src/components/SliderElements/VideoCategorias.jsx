import { useState, useEffect } from "react";
import { buscar } from "../../api/api";

const VideoCategorias = ({ children }) => {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await buscar("/videos");
      const videosCategorizados = response.reduce((acc, video) => {
        const categoria = video.categoria;
        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(video);
        return acc;
      }, {});
      setVideosPorCategoria(videosCategorizados);
    };

    fetchData();
  }, []);

  return <div>{children(videosPorCategoria)}</div>;
};

export default VideoCategorias;
