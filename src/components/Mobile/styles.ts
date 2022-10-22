import styled from "styled-components";

interface MenuProps {
    isOpen: boolean
}

export const Container = styled.section<MenuProps>`
    display: ${props => props.isOpen ? "block" : "none"};

    z-index: 2;
    width: 100vw;
    height: calc(100vh * 7);
    position: absolute;
    background-color: black;
    padding: 2rem;
    color: #fff;
    text-align: center;

    svg {
        color: var(--dark-yellow);
        font-size: 1.5rem;
        margin-left: auto;
    }

    ul {
        margin-top: 3rem;
        padding: 1rem;
        /* border: 1px solid red; */
        text-align: center;

        li {
            list-style: none;
            /* border: 1px solid red; */
            padding: 1rem;
            margin: .5rem;
        }
    }
`;