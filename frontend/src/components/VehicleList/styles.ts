import styled from 'styled-components';


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media (max-width: 900px){
        grid-template-columns: 1fr;
    }
`;

export const CarContainer = styled.div`
    border-radius: .25rem;
    background: var(--gray-800);
    overflow: hidden;
    transition: transform .15s, box-shadow .1s;

    img{
        width: 100%;
        background: var(--gray-150);
        user-select: none;
        pointer-events: none;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;

        p{
            font-size: 1.125rem;
            font-weight: 500;

            strong{
                color: var(--gray-200);
            }
        }

        button{
            height: 3rem;
            background: var(--blue-500);
            border-radius: .125rem;
            padding: 0 1rem;
            color: var(--gray-100);
            font-weight: 600;

            transition: background-color .15s;

            &:hover{
                background: var(--blue-600);
            }
        }
    }
`;