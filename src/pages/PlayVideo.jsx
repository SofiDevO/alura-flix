import YoutubeEmbed from "../components/EmbedYT";
import { Btn } from "../components/UI";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
const PlayVideo = () => {
    const navigate = useNavigate();
	return (
        <>
       <BtnContainer>
        <Btn onClick={()=>navigate("/")}>Volver</Btn>
       </BtnContainer>
		<YouTubeResponsive>
			<YoutubeEmbed embedId="-EtLHOODD3I" />
		</YouTubeResponsive>

    </>
	);
};

export default PlayVideo;

const YouTubeResponsive = styled.div`
	border-radius: 0.4rem;
	width: 100%;
	height: 85rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;

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