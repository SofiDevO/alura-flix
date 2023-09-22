import Hero from "../components/Hero"
import styled from "styled-components"
import VideoLista from "../components/SliderElements/Videos"
import { colorGrayMedium } from "../components/UI/variables"
import Footer from "../components/Footer"
const ListVideos = styled.div`
    position: relative;
    background-color: ${colorGrayMedium};
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
            
            <Footer/>
        </main>

                

    )
}

export default Home