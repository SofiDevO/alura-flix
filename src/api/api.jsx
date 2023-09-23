import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5555/",
});

export const buscar = async (url, setData) => {
	const respuesta = await api.get(url);
	setData(respuesta.data);
};

export const agregarVideo = async (data) => {
  try {
    // Realiza la solicitud POST utilizando Axios
    const response = await api.post('/videos', data);
    console.log('Datos enviados:', response.data);
    return response.data; // Retorna los datos del video recién creado
  } catch (error) {
    console.error('Error al enviar los datos:', error);
    throw error;
  }
};
