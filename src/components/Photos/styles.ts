import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    margin: 2rem auto;

    figure {
        overflow: hidden;

        img {
            transition: 500ms;
        }

        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }

    figure.main {
        width: 35rem;
        height: 30rem;
        position: relative;
        margin: 0 auto;
        border-radius: 10px;
    }

    .images-container {
        width: 35rem;
        margin: 1rem auto;
        display: flex;
        justify-content: space-between;
    }

    figure.image-single {
        width: 7.5rem;
        aspect-ratio: 1/1;
        position: relative;
        cursor: pointer;
        border-radius: 5px;
    }

    .selected-image {
        border: 4px solid var(--dark-yellow);
    }


    @media (max-width: 720px){
        width: 100%;

        figure.main {
            width: 90%;
        }

        .images-container {
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }

        figure.image-single {
            width: 20%;
            /* margin: 1px; */
            /* margin: calc(20% / 4); */
        }
    }
`;