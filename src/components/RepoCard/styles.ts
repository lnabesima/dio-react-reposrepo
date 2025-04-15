import styled from 'styled-components';

export const StyledRepoCardContainer = styled.div`
    width: clamp(0px, 75vw, 600px);
    border: 1px solid var(--gh-text-faded);
    background-color: var(--gh-card);
    padding: 0.625rem;
    border-radius: 8px;
    color: var(--gh-text-faded);
    display: grid;
    grid-template-columns: minmax(0, auto) auto;
    grid-auto-flow: dense;
    grid-row-gap: 0.3rem;
    
    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`

export const StyledRepoCardRepoHighlight = styled.span`
    font-weight: 600;
    color: var(--gh-text)
`

export const StyledRepoCardTitleContainer = styled.div`
    grid-area: 1 / 1 / 2 / 3;
`

export const StyledRepoCardNumbersContainer = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    display: flex;
    gap: 0.3rem;
    place-self: end;
    
    @media (max-width: 650px){
        gap: 0.3rem;
        align-self: flex-start;
    }
    
    @media (max-width: 450px){
        flex-direction: column;
        gap: 0;
    }
`
export const StyledRepoCardDescriptionContainer = styled.div`
    grid-area: 2 / 1 / 3 / 4;
`

export const StyledRepoCardLanguageContainer = styled.div`
    grid-area: 3 / 1 / 4 / 3;
`

export const StyledRepoCardButtonContainer = styled.div`
    grid-area: 3 / 3 / 4 / 4;
    place-self: end;

    @media (max-width: 650px){
        align-self: flex-start;
    }

    @media (max-width: 450px){
        width:100%;
        flex-grow: 1;
    }
`