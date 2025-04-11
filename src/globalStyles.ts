import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: #151b23;
        --gh-blue: #316dca;
        --gh-text: #d1d7e0;
        --gh-text-faded: #9198a1;
        --gh-card: #212830;
        --gh-accent: #262c36;
        --gh-green: #3b8640;
        --gh-star: #daaa3f;
    }

    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--bg-color);
        color: var(--gh-text);
        font-family: "Segoe UI", "Arial", "Helvetica", sans-serif;
        padding: 0.625rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100dvh;
    }
`