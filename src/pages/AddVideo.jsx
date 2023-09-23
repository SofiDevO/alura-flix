import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 

export default function AddVideo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
	} = useForm();
	const navigate = useNavigate(); 
	const [color, setColor] = useState(""); 

	const onSubmit = async (data) => {
		try {
			const categoria = getValues("categoria.nombre");
			const categoriaColor = getColorByCategoria(categoria);
			const videoData = { ...data, categoria: { nombre: categoria, color: categoriaColor } };

			const response = await axios.post("http://localhost:5555/videos", videoData);
			console.log("Datos enviados:", response.data);
			reset();
			navigate("/");
		} catch (error) {
			console.error("Error al enviar los datos:", error);
		}
	};

	const handleCategoriaChange = (event) => {
		const categoria = event.target.value;
		const categoriaColor = getColorByCategoria(categoria);
		setColor(categoriaColor);
	};

	const getColorByCategoria = (categoria) => {
		switch (categoria) {
			case "frontend":
				return "#6BD1FF";
			case "wordpress":
				return "#FFBA05";
			case "wsl":
				return "#00C86F";
			case "alura":
				return "#7b00e0";
			default:
				return "";
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Titulo"
				{...register("title", { required: true })}
			/>
			<input
				type="text"
				placeholder="el id del url de youtube: FyKPsua6Br8"
				{...register("embedId", { required: true, maxLength: 11 })}
			/>
			<input
				type="text"
				placeholder="el mismo id: FyKPsua6Br8"
				{...register("img", { required: true, maxLength: 11 })}
			/>
			<select
				{...register("categoria.nombre", { required: true })}
				onChange={handleCategoriaChange}
			>
				<option value="frontend">frontend</option>
				<option value="wordpress">wordpress</option>
				<option value="wsl">wsl</option>
				<option value="alura">alura</option>
			</select>
			<textarea
				placeholder="Descripción"
				{...register("metadescription", { required: true, maxLength: 200 })}
			/>
			<input type="submit" value="Enviar" />
		</form>
	);
}
