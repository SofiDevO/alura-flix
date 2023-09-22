import YoutubeEmbed from "../components/EmbedYT";





import styled from "styled-components";
const PlayVideo = ()=>{
    return(
        <YouTubeResponsive>
            <YoutubeEmbed embedId="EtLHOODD3I"/>
        </YouTubeResponsive>
    )
}

export default PlayVideo


const YouTubeResponsive = styled.div`
	border-radius: 0.4rem;
    width: 100%;
    height: 90rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
	@media screen and (max-width:768px) {
		width: 30rem;
	height: 20rem;
	}
`;