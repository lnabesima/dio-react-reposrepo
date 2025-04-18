import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: #151b23;
        --gh-blue: #316dca;
        --gh-text: #d1d7e0;
        --gh-text-faded: #9198a1;
        --gh-card: #212830;
        --gh-accent: #262c36;
        --gh-green: #2a883b;
        --gh-green-hover: #3b8640;
        --gh-green-active: #428f46;
        --gh-star: #daaa3f;
        --gh-danger-red-text: #e5534b;
        --gh-danger-red-button-hover: #ad2e2c;
        --gh-danger-red-button-active: #c33d38;
        --gh-danger-gray-button: #2f3742;
        --gh-danger-gray-text: #cdd9e5;
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
    }
    
    main{
        height: 100dvh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.625rem;
    }
`