import { useEffect, useState } from "react";
import YoutubeEmbed from "../components/EmbedYT";
import { Btn } from "../components/UI";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";
import Footer from "../components/Footer";

import styled from "styled-components";
const PlayVideo = ({ url }) => {
	const [vid, setVideo] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		buscar(`/videos/${id}`, setVideo).catch(() => {
			console.log(id);
		});
	}, [id]);
	return (
		<>
			<BtnContainer>
				<Btn onClick={() => navigate(`/videos/${id}`)}>Volver</Btn>
			</BtnContainer>
			<YouTubeResponsive>
				<YoutubeEmbed embedId={vid.embedId} />
			</YouTubeResponsive>
			<Footer/>
		</>
	);
};

export default PlayVideo;

const YouTubeResponsive = styled.div`
	border-radius: 0.4rem;
    width: 100%;
    height: 65rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;

	@media screen and (max-width: 768px) {
		width: 100%;
    height: 71vh;
    align-items: center;
`;
const BtnContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: flex-end;
	padding: 2rem 0 1rem 2rem;
	height: 19rem;
`;
