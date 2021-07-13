import styled from 'styled-components';

export const Container = styled.div`
    background: var(--gray-800);

    header{
        max-width: 1020px;
        height: 5rem;
        margin: 0 auto;
        padding: 0 2rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .user-options{
            height: 100%;
            display: flex;
            align-items: center;

            span{
                padding-right: 2rem;
                border-right: 1px solid var(--gray-150);
                color: var(--gray-150);
                
                strong{
                    font-family: 'Rajdhani';
                    font-size: 1.25rem;
                    color: var(--gray-100);
                }

                @media (max-width: 500px){
                    display: none;
                }
            }

            button{
                background: transparent;
                padding: 1rem 2rem;

                color: var(--gray-150);

                transition: color .15s;

                &:hover{
                    color: var(--blue-500);
                }
            }
        }

        .login-btn{
            background: var(--blue-500);

            padding: .625rem 1rem;
            border-radius: .125rem;
            color: var(--gray-100);
            font-weight: 600;

            transition: background-color .15s;

            &:hover{
                background: var(--blue-600);
            }
        }
    }
`;