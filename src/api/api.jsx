import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5555/",
});

export const buscar = async (url, setData) => {
    try {
        const response = await api.get(url);
        setData(response.data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
};

export const obtenerCategorias = async () => {
  try {
    const response = await api.get('/categoria'); // Cambia a la ruta correcta para obtener categorías
    return response.data;
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    throw error;
  }
};

export const agregarVideo = async (data) => {
  try {
    const response = await api.post('/videos', data);
    console.log('Datos enviados:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos:', error);
    throw error;
  }
};
