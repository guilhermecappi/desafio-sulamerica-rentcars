import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    :root{
        --gray-100: #fdfdff;
        --gray-150: #dedeef;
        --gray-200: #76769a;
        --gray-800: #1a1a1e;
        --gray-900: #121214;

        --blue-500: #5777DE;
        --blue-600: #4B57DE;
    }

    body, input, button {
        font-size: 1rem;
    }

    body{
        background: var(--gray-900);
        color: var(--gray-100);
    }

    body::-webkit-scrollbar{
        width: 10px;
        height: 10px;
        background: #090909;
    }

    body::-webkit-scrollbar-thumb{
        background: #333;
    }

    button{
        cursor: pointer;
        border: 0;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

`;