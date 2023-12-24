import { useForm } from "react-hook-form";
import CustomTextInput from "../components/FormularioElements/CampoTexto";
import Tabla from "../components/TablaCategory";
import {
  agregarCategoria,
  editarCategoria,
  eliminarCategoria,
  obtenerCategorias,
} from "../api/api";
import { v4 as uuidv4 } from "uuid";
import {
  Btn,
  Form,
  FormularioTitulo,
  Container,
  ContainerInput,
  CajaInputs,
  BarraError,
  InputSubmit,
  ContenedorBotones,
  CajaBotones,
  TextoLabel,
  SpanMensaje,
  TextAreaWrapper,
  ElementosFormulario,
} from "../components/UI";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { colorGrayLigther, colorPrimario } from "../components/UI/variables";

const NewCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [categorias, setCategorias] = useState([]);
  const [categoriaEditada, setCategoriaEditada] = useState(null);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    try {
      const categoriasData = await obtenerCategorias();
      setCategorias(categoriasData);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  const onSubmit = async (data) => {
    const id = uuidv4();
    const newData = {
      ...data,
      id,
    };

    try {
      if (categoriaEditada) {
        await editarCategoria(categoriaEditada.id, newData);
        setCategoriaEditada(null);
        reset();
      } else {
        await agregarCategoria(newData);
        reset();
      }
      cargarCategorias();
    } catch (error) {
      console.error("Error al agregar/editar la categoría:", error);
    }
  };

  const handleEditarCategoria = (categoria) => {
    setCategoriaEditada(categoria);
    setValue("nombre", categoria.nombre);
    setValue("descripcion", categoria.descripcion);
    setValue("color", categoria.color);
  };

  const handleEliminarCategoria = async (id) => {
    try {
      await eliminarCategoria(id);
      cargarCategorias();
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
    }
  };

  const handleCancelarEdicion = () => {
    setCategoriaEditada(null);
    reset();
  };

  return (
    <>
      <Container>
        <FormularioTitulo>
          {categoriaEditada ? "Editar Categoría" : "Nueva Categoría"}
        </FormularioTitulo>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ElementosFormulario>
            <CajaInputs>
              <ContainerInput>
                <CustomTextInput
                  type="text"
                  label="nombre"
                  name="nombre"
                  placeholder="Agregue el nombre de la categoría"
                  register={register}
                  error={errors.nombre}
                />
                {errors.nombre && <BarraError variant="red"></BarraError>}
              </ContainerInput>
              {errors.nombre && (
                <SpanMensaje variant="red">
                  El Nombre es un campo requerido
                </SpanMensaje>
              )}
            </CajaInputs>

            <CajaInputs>
              <ContainerInput>
                <TextoLabel>Descripción</TextoLabel>
                <TextAreaWrapper
                  placeholder="Agregue la descripción de esta categoría"
                  {...register("descripcion", {
                    required: true,
                  })}
                />
                {errors.descripcion && <BarraError variant="red"></BarraError>}
              </ContainerInput>
              {errors.descripcion && (
                <SpanMensaje variant="red">
                  Debes agregar una descripción
                </SpanMensaje>
              )}
            </CajaInputs>

            <CajaInputs>
              <ContainerInput>
                <CustomTextInput
                  type="color"
                  label="color"
                  name="color"
                  placeholder="Selecciona un color"
                  register={register}
                  error={errors.color}
                />
                {errors.color && <BarraError variant="red"></BarraError>}
              </ContainerInput>
              {errors.color && (
                <SpanMensaje variant="red">Debes elegir un color</SpanMensaje>
              )}
            </CajaInputs>
          </ElementosFormulario>
          <CajaBotones>
            <ContenedorBotones>
              {categoriaEditada ? (
                <>
                  <InputSubmit
                    type="button"
                    value="Guardar Edición"
                    onClick={handleSubmit(onSubmit)}
                  />
                  <Btn onClick={handleCancelarEdicion}>Cancelar Edición</Btn>
                </>
              ) : (
                <InputSubmit type="submit" value="Guardar" />
              )}
              <Btn onClick={() => reset()}>Limpiar</Btn>
            </ContenedorBotones>
          </CajaBotones>
        </Form>
      </Container>
      <TablaContainer>
        <Tabla
          categorias={categorias}
          onEditar={handleEditarCategoria}
          onEliminar={handleEliminarCategoria}
        />
      </TablaContainer>
    </>
  );
};

export default NewCategory;

const TablaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${colorGrayLigther};
  font-size: 1.8rem;
  padding: 0 0 5rem 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
