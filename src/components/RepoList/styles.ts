import styled from 'styled-components';

export const StyledRepoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    align-items: center;
    
    background: var(--gh-card);
    border-top : 1px solid var(--gh-text-faded);
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    
    padding: 0.625rem;
`