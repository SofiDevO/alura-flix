import  {createGlobalStyle } from "styled-components"
import { colorGrayDark, colorGrayLight } from "./components/UI/variables"


const GlobalStyle = createGlobalStyle`
     * {
        box-sizing: border-box;
        font-family: "Roboto",sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        transition: all .5s ease;
    }
    body{
        background-color: ${colorGrayDark};
    }
        
        

`

export default GlobalStyle