import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Btn } from "../components/UI";
import { obtenerCategorias, agregarVideo } from "../api/api"; // Importa la función obtenerCategorias en lugar de buscar

export default function AddVideo() {
  // Configuración de React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);

  // useEffect para cargar las categorías cuando se monta el componente
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasData = await obtenerCategorias(); // Utiliza la función obtenerCategorias
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    fetchCategorias();
  }, []);

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = async (data) => {
    try {
      const categoriaId = getValues("categoria");
      const categoriaSeleccionada = categorias.find(
        (categoria) => categoria.id === categoriaId
      );
  
      if (categoriaSeleccionada) {
        const videoId = uuidv4();
        const videoData = {
          ...data,
          categoria: {
            nombre: categoriaSeleccionada.nombre,
            color: categoriaSeleccionada.color,
          },
          id: videoId,
        };
  
        await agregarVideo(videoData);
        reset(); // Limpia el formulario después de enviar
        navigate("/"); // Navega de regreso a la página principal
      } else {
        console.error("Categoría no encontrada");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Campos del formulario */}
      <input
        type="text"
        placeholder="Titulo"
        {...register("title", {
          required: true,
          message: "Este campo es obligatorio",
        })}
      />
      <input
        type="text"
        placeholder="el id del url de youtube: FyKPsua6Br8"
        {...register("embedId", {
          required: true,
          maxLength: 11,
          message: "Este campo es obligatorio",
        })}
      />

      <input
        type="text"
        placeholder="el mismo id: FyKPsua6Br8"
        {...register("img", {
          required: true,
          maxLength: 11,
          message: "Este campo es obligatorio",
        })}
      />

      <div className="lista-opciones">
        <label>Categoria</label>
        <select
          value={getValues("categoria")}
          onChange={(e) => setValue("categoria", e.target.value)}
        >
          <option value="" disabled defaultValue="" hidden>
            Categoria
          </option>
          {categorias.map((categoria) => (
            <option
              key={categoria.id}
              value={categoria.id}
              data-color={categoria.color}
            >
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>

      <textarea
        placeholder="Descripción"
        {...register("metadescription", {
          required: true,
        })}
      />
      {errors.metadescription && <span>Este campo es requerido</span>}
      <input type="submit" value="Enviar" />
      <Btn variant="blue" onClick={() => navigate("/add-category")}>
        Agregar Categoría
      </Btn>
    </form>
  );
}
