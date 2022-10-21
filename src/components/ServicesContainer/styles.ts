import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 2rem; */

    div.card {
        width: 13rem;
        height: 13rem;
        border: 1px solid var(--dark-yellow);
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 500ms ease-in-out;
        text-align: center;

        &:hover {
            background-color: var(--dark-yellow);
            
            svg {
                color: #fff;
            }
        }

        svg {
            font-size: 5rem;
            margin-bottom: 1rem;
            color: var(--dark-yellow);
            transition: 500ms;
        }

        p {
            color: #fff;
            font-size: 1.25rem;
        }
    }

    @media (max-width: 900px){
        flex-wrap: wrap;
        justify-content: space-evenly;

        div.card {
            width: 12rem;
            margin: 1rem;
            aspect-ratio: 1/1;
        }
    }
`;