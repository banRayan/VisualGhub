import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;