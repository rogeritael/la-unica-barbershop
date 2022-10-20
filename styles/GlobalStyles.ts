import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #0E0E0E;
        --dark-yellow: #b08f51;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    body, html {
        background-color: var(--primary-color);
    }     

    body::-webkit-scrollbar {
        width: 5px;
    }
    body::-webkit-scrollbar-track {
        background: var(--primary-color);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--dark-yellow);
        border-radius: 20px;
    }
`;





