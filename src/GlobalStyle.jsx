import  {createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
     * {
        box-sizing: border-box;
        font-family: "Roboto",sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        transition: all .5s ease;
    }
    html{
        font-size: 62.5%;
    }

`

export default GlobalStyle