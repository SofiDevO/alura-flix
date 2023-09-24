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
	EviarLimpiar
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
			<FormularioTitulo>Nuevo Video</FormularioTitulo>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{/* Campos del formulario */}
				<CajaInputs>
					<ContainerInput>
						<CustomTextInput
							label="Título"
							name="title"
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
					{errors.title && <span>El Título es un campo requerido</span>}
				</CajaInputs>
				<CajaBotones>
				<ContenedorBotones>
				<EviarLimpiar>
					<InputSubmit type="submit" value="Guardar" />
				</EviarLimpiar>
					<Btn onClick={() => reset()}>Limpiar </Btn>
				</ContenedorBotones>
				</CajaBotones>

			</Form>
		</Container>
	);
};

export default NewCategory;
