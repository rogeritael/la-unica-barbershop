import styled from "styled-components";

export const Container = styled.button`
    height: 40px;
    padding: 0 1rem;
    min-width: 100px;
    border: none;
    border-radius: 3px;
    background-color: var(--dark-yellow);
    cursor: pointer;
    transition: 500ms;
    text-transform: uppercase;

    a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }

    &:hover {
        transform: scale(1.1);
    }
`;