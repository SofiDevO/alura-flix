import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CustomTextInput from "../components/FormularioElements/CampoTexto";
import { obtenerCategorias, agregarVideo } from "../api/api"; // Importa la función obtenerCategorias en lugar de buscar
import {
  Btn,
  ElementosFormulario,
  Form,
  FormularioTitulo,
  Container,
  ContainerInput,
  CajaInputs,
  BarraError,
  EviarLimpiar,
  ContenedorBotones,
  TextAreaWrapper,
  Select,
  InputSubmit,
  TextoLabel,
  SpanMensaje,
} from "../components/UI";

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
    <Container>
      <FormularioTitulo>Nuevo Video</FormularioTitulo>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Campos del formulario */}
        <ElementosFormulario>
          <CajaInputs>
            <ContainerInput>
              <CustomTextInput
                type="text"
                label="Título"
                name="title"
                placeholder="Agregue el Título del video"
                register={register}
                error={errors.title}
              />
              {errors.title ? (
                <BarraError variant="red"></BarraError>
              ) : (
                <BarraError></BarraError>
              )}
            </ContainerInput>
            {errors.title && (
              <SpanMensaje variant="red">
                El Título es un campo requerido
              </SpanMensaje>
            )}
          </CajaInputs>

          <CajaInputs>
            <ContainerInput>
              <CustomTextInput
                type="text"
                label="Embed ID del video"
                name="embedId"
                placeholder="el id del url de youtube: FyKPsua6Br8"
                register={register}
                error={errors.embedId}
              />
              {errors.embedId ? (
                <BarraError variant="red"></BarraError>
              ) : (
                <BarraError></BarraError>
              )}
            </ContainerInput>
            {errors.embedId && (
              <SpanMensaje variant="red">El ID es requerido</SpanMensaje>
            )}
          </CajaInputs>

          <CajaInputs>
            <ContainerInput>
              <CustomTextInput
                type="text"
                label="Embed ID para imagen"
                name="img"
                placeholder="el mismo id: FyKPsua6Br8"
                register={register}
                error={errors.img}
              />
              {errors.img ? (
                <BarraError variant="red"></BarraError>
              ) : (
                <BarraError></BarraError>
              )}{" "}
            </ContainerInput>
            {errors.img && (
              <SpanMensaje variant="red">
                Agrega el ID para la imagen(La misma que el id del video)
              </SpanMensaje>
            )}
          </CajaInputs>

          <CajaInputs>
            <ContainerInput>
              <TextoLabel>Escoja una categoría</TextoLabel>
              <Select
                value={getValues("categoria")}
                onChange={(e) => setValue("categoria", e.target.value)}
              >
                <option value="" disabled defaultValue="" hidden>
                  Elegir
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
              </Select>
              {errors.categoria ? (
                <BarraError variant="red"></BarraError>
              ) : (
                <BarraError></BarraError>
              )}{" "}
            </ContainerInput>
            {errors.categoria && (
              <SpanMensaje variant="red">
                Debes seleccionar una categoría
              </SpanMensaje>
            )}
          </CajaInputs>
          <CajaInputs>
            <ContainerInput>
              <TextoLabel>Descripción</TextoLabel>
              <TextAreaWrapper
                placeholder="Agregue la descripción del video"
                {...register("metadescription", {
                  required: true,
                })}
              />
              {errors.metadescription ? (
                <BarraError variant="red"></BarraError>
              ) : (
                <BarraError></BarraError>
              )}
            </ContainerInput>
            {errors.metadescription && (
              <SpanMensaje variant="red">
                Debes agregar una descripción
              </SpanMensaje>
            )}
          </CajaInputs>
        </ElementosFormulario>

        <ContenedorBotones>
          <EviarLimpiar>
            <InputSubmit type="submit" value="Guardar" />
            <Btn onClick={() => reset()}>Limpiar</Btn>
          </EviarLimpiar>

          <Btn variant="blue" onClick={() => navigate("/add-category")}>
            Agregar Categoría
          </Btn>
        </ContenedorBotones>
      </Form>
    </Container>
  );
}
