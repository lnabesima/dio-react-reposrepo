import styled from 'styled-components';

export const StyledButton = styled.button<{ variant: 'default' | 'danger' }>`

    background-color: ${props => props.variant === 'default' ? 'var(--gh-green)' : 'var(--gh-danger-gray-button)'};
    color: ${props => props.variant === 'default' ? 'var(--gh-text)' : 'var(--gh-danger-red-text)'};
    padding: 6px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-shadow: ${props => props.variant === 'default' ? 'rgba(28, 33, 40, 0.6) 0 1px 1px 0' : '0 0 0 1px #3d444d'}, rgba(28, 33, 40, 0.6) 0 1px 3px 0;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.variant === 'default' ? 'var(--gh-green-hover)' : 'var(--gh-danger-red-button-hover)'};
        color: ${props => props.variant === 'default' ? 'var(--gh-text)' : 'var(--gh-danger-gray-text)'};
        box-shadow: ${props => props.variant === 'default' ? 'rgba(28, 33, 40, 0.6) 0 1px 1px 0,' +
                ' rgba(28, 33, 40, 0.6) 0 1px 3px 0' : 'none'};

    }

    &:active {
        background-color: ${props => props.variant === 'default' ? 'var(--gh-green-active)' : 'var(--gh-danger-red-button-active)'};
        color: ${props => props.variant === 'default' ? 'var(--gh-text)' : 'var(--gh-danger-gray-text)'};
        box-shadow: ${props => props.variant === 'default' ? 'rgba(28, 33, 40, 0.6) 0 1px 1px 0,' +
                ' rgba(28, 33, 40, 0.6) 0 1px 3px 0' : 'none'};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: gray;
    }
`;