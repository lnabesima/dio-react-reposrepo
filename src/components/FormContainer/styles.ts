import styled from 'styled-components';

export const StyledFormContainer = styled.form`
    width: 45vw;
    display: flex;
    gap: 0.625rem;
    
    @media (max-width: 700px) {
        width: 80%;
    }
    @media (max-width: 400px) {
        flex-direction: column;
        gap: 0.3125rem;
    }
`