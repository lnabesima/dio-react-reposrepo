import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    border: 1px solid var(--gh-text-faded);
    background-color: transparent;
    color: var(--gh-text);
    padding: 6px 10px;
    border-radius: 8px;
    outline: none;
        
    &:focus{
        border: 1px solid var(--gh-blue);
        box-shadow: 0 0 0 1px var(--gh-blue);
        outline: none;
    }
`;