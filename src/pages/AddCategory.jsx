import { useForm } from "react-hook-form";
import CustomTextInput from "../components/FormularioElements/CampoTexto";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

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
	EviarLimpiar,
	TextoLabel,
	SpanMensaje,
	TextAreaWrapper,
	ElementosFormulario
} from "../components/UI";

const NewCategory = () => {
	// Configuración de React Hook Form
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
		setValue,
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);
	return (
		<Container>
			<FormularioTitulo>Nueva Categoría</FormularioTitulo>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{/* Campos del formulario */}
				<ElementosFormulario>
				<CajaInputs>
					<ContainerInput>
						<CustomTextInput
							label="nombre"
							name="nombre"
							placeholder="Agregue el nombre de la categoría"
							register={register}
							error={errors.title}
						/>
						{errors.title ? (
							<BarraError variant="red"></BarraError>
						) : (
							<BarraError></BarraError>
						)}
					</ContainerInput>
					{errors.title && <span>El Nombre es un campo requerido</span>}
				</CajaInputs>

				<CajaInputs>
						<ContainerInput>
							<TextoLabel>Descripción</TextoLabel>
							<TextAreaWrapper
								placeholder="Agregue la descripcion de esta categoria "
								{...register("descripcion", {
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
							<SpanMensaje variant="red">Debes agregar una descripción</SpanMensaje>
						)}
					</CajaInputs>
					<CajaInputs>
					<ContainerInput>
						<CustomTextInput
						type="color"
							label="nombre"
							name="nombre"
							placeholder="Agregue el nombre de la categoría"
							register={register}
							error={errors.title}
						/>
						{errors.title ? (
							<BarraError variant="red"></BarraError>
						) : (
							<BarraError></BarraError>
						)}
					</ContainerInput>
					{errors.title && <span>Elige un color</span>}
				</CajaInputs>
					

				{/* Botones */}
				<CajaBotones>
				<ContenedorBotones>
				<EviarLimpiar>
					<InputSubmit type="submit" value="Guardar" />
				</EviarLimpiar>
					<Btn onClick={() => reset()}>Limpiar </Btn>
				</ContenedorBotones>
				</CajaBotones>
				</ElementosFormulario>
			</Form>
		</Container>
	);
};

export default NewCategory;
