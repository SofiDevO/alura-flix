import Hero from "../components/Hero"
import styled from "styled-components"
import VideoLista from "../components/Videos"
const ListVideos = styled.div`
    position: relative;
    background-color: black;
    height: auto;
    color: white;
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