import styled from "styled-components";

export const Container = styled.section`
    margin: 3rem 0;

    figure {
        width: 100%;
        aspect-ratio: 5/2.5;
        /* border-radius: 2rem 2rem 2rem 5rem; */
        overflow: hidden;
        position: relative;
        margin: 0 auto;

        &::after {
            content: "";
            width: 100%;
            height: 100%;
            background-color: #000;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.75;
        }
        
        img {
            transition: 500ms;
        }

        &:hover {
            img {
                transform: scale(1.1);
            }
        }

        .cover-text {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            z-index: 1;
            color: #fff;
            text-align: center;

            h1 {
                font-size: 4rem;
                max-width: 700px;
                line-height: 4rem;
                text-transform: uppercase;
            }
        }
    }

    button {
        margin-top: 1rem;
    }

    @media (max-width: 1125px){
        .cover-text{
            width: 90%;
            text-align: center;
            /* border: 1px solid red; */

            h1 {
                margin: 0 auto;
            }
        }
    }


    @media (max-width: 725px){
        figure {
            width: 100%;
            aspect-ratio: 5/3;
            border-radius: 0;

            .cover-text{
                h1 {
                    font-size: 2rem;
                    line-height: 2.5rem;
                }
            }
        }
    } 
`;