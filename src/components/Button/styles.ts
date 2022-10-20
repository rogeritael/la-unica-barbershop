import styled from "styled-components";

export const Container = styled.button`
    height: 40px;
    min-width: 100px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: var(--dark-yellow);
    cursor: pointer;
    transition: 500ms;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        transform: scale(1.1);
    }
`;