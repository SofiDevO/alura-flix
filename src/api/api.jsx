import axios from "axios";

// Crea una instancia de axios con la base de la API
export const api = axios.create({
  //Comenta este url para usar en modo local
  baseURL: "https://fake-api-aluraflix-two.vercel.app",
  /* quita el comentario de esta API  pra hacer pruebas CRUD
  deberás ejecutar el comando `json-server -w -p 5555 db.json` */
  // baseURL: "http://localhost:5555/",
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
  }
};

// Función para editar una categoría en la API
export const editarCategoria = async (id, data) => {
  try {
    // Realiza una solicitud PUT a la ruta '/categoria/{id}' con los datos proporcionados
    const response = await api.put(`/categoria/${id}`, data);

    // Registra en la consola los datos enviados como respuesta
    console.log("Categoría editada:", response.data);

    // Devuelve los datos de respuesta de la API
    return response.data;
  } catch (error) {
    console.error("Error al editar la categoría:", error);

    // Lanza el error para que pueda ser manejado en el lugar donde se llama a esta función
  }
};

// Función para eliminar una categoría de la API
export const eliminarCategoria = async (id) => {
  try {
    // Realiza una solicitud DELETE a la ruta '/categoria/{id}' para eliminar la categoría
    const response = await api.delete(`/categoria/${id}`);

    // Registra en la consola los datos enviados como respuesta
    console.log("Categoría eliminada:", response.data);

    // Devuelve los datos de respuesta de la API
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    // Lanza el error para que pueda ser manejado en el lugar donde se llama a esta función
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
  }
};
