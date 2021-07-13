import styled from "styled-components";

export const Container = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    padding: 4rem 2rem;

    main{
        .details-section{

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;

            div{
                h2{
                    margin-bottom: 2rem;
                }

                ul{
                    padding: 0 2rem;
                    background: var(--gray-800);
                    border-radius: .25rem;

                    li{

                        list-style: none;
                        padding: 1.5rem 0;

                        display: flex;
                        align-items: center;

                        span{
                            flex: 1;
                            color: var(--gray-150);

                            &:first-child{
                                color: var(--gray-200);
                            }
                        }

                        & + li {
                            border-top: 1px solid var(--gray-900);
                        }
                    }
                }  
            }

            img{
                width: 100%;
                border-radius: .25rem;
                background: var(--gray-150);
                user-select: none;
                pointer-events: none;
            }  

            @media (max-width: 900px){
                grid-template-columns: 1fr;
            }
        }

        .renting-section{
            padding-top: 4rem;
            h1{
                margin-bottom: 1.5rem
            }
      }
    }
`;

export const RentingContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div{
        p{
            margin-bottom: .5rem;
            color: var(--gray-150);
            strong{
                color: var(--gray-200);
            }
        }

        > div{
            width: 300px;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: .25rem;
            background: var(--gray-800);
            
            //Mui pickers style
    
            div{
                color: var(--gray-150);
                button{
                    color: var(--blue-500);
                }
            }
            //
        }
    }

    .confirmation-btn{
        width: 170px;
        height: 4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        align-self: flex-end;
        border-radius: .25rem;
        background: var(--blue-500);
        font-weight: 500;
        color: var(--gray-100);
        transition: background-color .15s;

        &:hover{
            background: var(--blue-600)
        }
    }

    @media (max-width: 900px){
        flex-direction: column;
        align-items: flex-start;

        > div{
            margin-bottom: 1.5rem
        }

        .confirmation-btn{
            align-self: flex-start;
        }
    }
`;
  