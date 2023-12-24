import Hero from "../components/Hero";
import styled from "styled-components";
import VideoLista from "../components/SliderElements/Videos";
import { colorGrayMedium } from "../components/UI/variables";
import Footer from "../components/Footer";
const ListVideos = styled.div`
  position: relative;
  /* background-color: #151515; */
  height: auto;
  color: white;
  padding: 0 4rem;
  background-image: linear-gradient(274deg, rgb(0 0 16) 20%, rgb(0 0 0) 38%);
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Home = () => {
  return (
    <main>
      <Hero />
      <ListVideos>
        <VideoLista />
      </ListVideos>

      <Footer />
    </main>
  );
};

export default Home;
