import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > div{
        width: 100%;
        max-width: 350px;
        background: var(--gray-800);
        padding: 0 2rem 3rem;
        border-radius: .25rem;

        h1{
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;
            padding: 2rem 0;
        }
        
        form{
            display: flex;
            flex-direction: column;

            input, button{
                color: var(--gray-100);
                height: 3rem;
                border-radius: .25rem;
            }

            input{
                margin-bottom: 1rem;
                padding: 0 1rem;
                border: 0;
                outline: none;
                background: var(--gray-900);

                transition: border .15s, box-shadow .15s;

                &:focus{
                    border: 1px solid var(--blue-600);
                    box-shadow: 0 0 4px rgba(64, 126, 251, .6);
                }
            }

            button{
                font-weight: 600;
                background: var(--blue-500);

                display: flex;
                align-items: center;
                justify-content: center;

                transition: background-color .15s;

                &:hover:not(:disabled){
                    background: var(--blue-600);
                }

                &:disabled{
                    cursor: default;
                    opacity: .4;
                }
            }
        }
    }
`;