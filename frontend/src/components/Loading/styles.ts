import styled from 'styled-components';

interface LoadingProps{
    color?: string;
}

export const Container = styled.div<LoadingProps>`
    border: 2px solid ${(props) => {
        switch(props.color){
            case 'white':
                return 'var(--gray-100)'
            case 'blue': 
                return 'var(--blue-500)'
            default: 
                return 'var(--blue-500)'
        }
    }};
    border-right-color: transparent;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    animation: rotate .5s infinite linear;

    @keyframes rotate {
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--gray-800);
    border-radius: .25rem;
`;