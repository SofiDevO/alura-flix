import styled from "styled-components";
import { useState, useEffect } from "react";
import { colorFrontend } from "../UI/variables";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CajaVideo = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 3rem 0;
	text-align: center;
	:hover {
		transform: scale(1.1);
	}
`;
const ImagenVideo = styled.img`
	width: 50rem;
	border: 3px solid ${colorFrontend};
	@media screen and (max-width: 768px) {
		width: 33rem;
	}
`;
const CategoriaTitulo = styled.h3`
	background-color: #00c86f;
	text-align: center;
	display: flex;
	width: 19.3043rem;
	height: 6rem;
	flex-direction: column;
	justify-content: center;
	font-family: Roboto;
	font-size: 3.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const VideoLista = () => {
	const [videosPorCategoria, setVideosPorCategoria] = useState({});

	useEffect(() => {
		// Hacer la solicitud de todos los videos
		buscar("/videos", (videos) => {
			// Organizar los videos por categoría
			const videosCategorizados = videos.reduce((acc, video) => {
				const categoria = video.categoria;
				if (!acc[categoria]) {
					acc[categoria] = [];
				}
				acc[categoria].push(video);
				return acc;
			}, {});
			setVideosPorCategoria(videosCategorizados);
		});
	}, []);

	return (
		<>
			{Object.keys(videosPorCategoria).map((categoria) => {
				const videos = videosPorCategoria[categoria];
				const settings = {
					dots: false,
					infinite: true,
					speed: 500,
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 0,
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								infinite: true,
								dots: false,
							},
						},
						{
							breakpoint: 900,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
								initialSlide: 1,
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
					],
				};
				return (
					<div key={categoria}>
						<CategoriaTitulo>{categoria}</CategoriaTitulo>
						<Slider {...settings}>
							{videos.map((video) => {
								const { id, title, img } = video;
								return (
									<Link to={`/videos/${id}`} key={id}>
										<CajaVideo>
											<article>
												<ImagenVideo src={img} alt={title} />
											</article>
										</CajaVideo>
									</Link>
								);
							})}
						</Slider>
					</div>
				);
			})}
		</>
	);
};

export default VideoLista;
