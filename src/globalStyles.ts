import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #151b23;
        color: #d1d7e0;
        font-family: "Segoe UI", "Arial", "Helvetica", sans-serif;
        padding: 0.625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100dvh;
    }
`