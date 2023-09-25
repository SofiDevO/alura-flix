import axios from "axios";

// Crea una instancia de axios con la base de la API
export const api = axios.create({
  baseURL: "http://localhost:5555/",
});

// Función para realizar una búsqueda en la API
export const buscar = async (url, setData) => {
  try {
    // Realiza una solicitud GET a la URL especificada
    const response = await api.get(url);

    // Establece los datos recibidos en la función setData
    setData(response.data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    // Lanza el error para que pueda ser manejado en el lugar donde se llama a esta función
    throw error;
  }
};

// Función para obtener categorías desde la API
export const obtenerCategorias = async () => {
  try {
    // Realiza una solicitud GET a la ruta '/categoria' para obtener categorías
    const response = await api.get("/categoria");

    // Devuelve los datos de categorías obtenidos de la API
    return response.data;
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    // Lanza el error para que pueda ser manejado en el lugar donde se llama a esta función
    throw error;
  }
};

// Función para agregar una categoría a la API
export const agregarCategoria = async (data) => {
  try {
    // Realiza una solicitud POST a la ruta '/categoria' con los datos proporcionados
    const response = await api.post("/categoria", data);

    // Registra en la consola los datos enviados como respuesta
    console.log("Datos enviados:", response.data);

    // Devuelve los datos de respuesta de la API
    return response.data;
  } catch (error) {
    console.error("Error al agregar la categoría:", error);
    // Lanza el error para que pueda ser manejado en el lugar donde se llama a esta función
    throw error;
  }
};

// Función para agregar un video a la API
export const agregarVideo = async (data) => {
  try {
    // Realiza una solicitud POST a la ruta '/videos' con los datos proporcionados
    const response = await api.post("/videos", data);

    // Registra en la consola los datos enviados como respuesta
    console.log("Datos enviados:", response.data);

    // Devuelve los datos de respuesta de la API
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    // Lanza el error para que pueda ser manejado en el lugar donde se llama a esta función
    throw error;
  }
};
