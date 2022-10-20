import styled from "styled-components";

export const Container = styled.header`
    .top-header, .bottom-header {
        width: 100%;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    .top-header {
        border-bottom: 1px solid rgba(255,255,255, 0.1);

        figure.logo {
            height: 60px;
            width: 120px;
            position: relative;

            img {
                color: #fff;
            }
        }
    }

    .bottom-header {
        color: #fff;

        p span {
            font-weight: bold;
        }

        ul {
            li {
                display: inline;
                margin: 0 .5rem;
                transition: 500ms;
                position: relative;
                text-transform: uppercase;
                font-size: .8rem;
                cursor: pointer;

                &::after {
                    content: "";
                    width: 0;
                    height: 2px;
                    background-color: var(--dark-yellow);
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    border-radius: 1px;
                    transition: 500ms ease-in-out;
                }

                &:hover {
                    color: var(--dark-yellow);
                
                    ::after {
                        width: 100%;
                    }
                }
            }
        }
    }

`;