import { useEffect, useState } from "react";
import YoutubeEmbed from "../components/EmbedYT";
import { Btn } from "../components/UI";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";




import styled from "styled-components";
const PlayVideo = ({url}) => {
    const [vid, setVideo] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		buscar( `/videos/${id}`, setVideo).catch(() => {
			console.log(id)
		});
	}, [id]);
	return (
        <>
       <BtnContainer>
        <Btn onClick={()=>navigate(`/videos/${id}`)}>Volver</Btn>
       </BtnContainer>
		<YouTubeResponsive>
			<YoutubeEmbed embedId={vid.embedId} />
		</YouTubeResponsive>

    </>
	);
};

export default PlayVideo;

const YouTubeResponsive = styled.div`
	    border-radius: 0.4rem;
    width: 100%;
    height: 71rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 60vh;
		align-items: center;
	}
`;
const BtnContainer = styled.div`
        display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding:1rem 0 1rem 2rem;
`