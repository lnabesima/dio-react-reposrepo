import styled from 'styled-components';

export const StyledButton = styled.button`

    background-color: var(--gh-green);
    padding: 6px 12px;
    color: white;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(28, 33, 40, 0.6) 0 1px 1px 0, rgba(28, 33, 40, 0.6) 0 1px 3px 0;
    min-width: 100px;
    

    &:hover {
        background-color: var(--gh-green-hover);
    }

    &:active {
        background-color: var(--gh-green-active);
    }
`