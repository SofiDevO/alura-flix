import Hero from "../components/Hero"
import styled from "styled-components"
import VideoLista from "../components/Videos"
const ListVideos = styled.div`
    position: relative;
    background-color: black;
    height: auto;
    color: white;
    padding: 0 4rem;
    @media screen and (max-width:768px) {
        padding: 0;
    }
`



const Home = ()=>{
    return(
        <main>
            <Hero/>
            <ListVideos>
                <VideoLista/>
            </ListVideos>
                

        </main>
    )
}

export default Home