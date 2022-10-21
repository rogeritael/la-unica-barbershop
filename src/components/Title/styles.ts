import styled from "styled-components";

export const Container = styled.h1`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    width: fit-content;
    margin: 10rem auto 3rem auto;
    position: relative;

    &::before, &::after {
        content: "";
        height: 5px;
        width: 100px;
        background-color: var(--dark-yellow);
        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
        border-radius: 5px;
        transition: 500ms;
    }

    &::before {
        left: -120px;
    }

    &::after {
        right: -120px;
    }

    
    &:hover {
        &::after{
            right: -140px;
        }

        &::before{
            left: -140px;
        }
    }

    
    @media (max-width: 625px){
        &::before, &::after {
            width: 0;
        }
    }
    
    @media (max-width: 425px){
        font-size: 1.5rem;
    }
`;