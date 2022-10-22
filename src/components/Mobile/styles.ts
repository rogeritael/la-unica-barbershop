import styled from "styled-components";

interface MenuProps {
    isOpen: boolean
}

export const Container = styled.section<MenuProps>`
    display: ${props => props.isOpen ? "block" : "none"};

    z-index: 1;
    width: 100vw;
    height: 100%;
    position: absolute;
    background-color: black;
    padding: 1rem;
    color: #fff;
    text-align: center;

    svg {
        color: #fff;
        font-size: 2rem;
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