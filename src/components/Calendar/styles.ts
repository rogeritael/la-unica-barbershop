import styled from "styled-components";

export const Container = styled.section`
    text-align: center;

    .calendar-container {
        display: flex;
        flex-wrap: wrap;
        width: 550px;
        margin: 0 auto;

        .dayCard {
            width:50px;
            height:50px;
            margin: 2.5px;
            border: 1px solid var(--dark-yellow);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: 500ms;

            &:hover {
                background-color: var(--dark-yellow);
            }
        }

        .disabled {
            background-color: #222222;
            border: none;
            color: var(--primary-color);
            cursor: auto;
            &:hover {
                background-color: #222222;
            }
        }

        .active {
            background-color: var(--dark-yellow);
            font-weight: bold;
        }

        select {
            height: 50px;
            margin: 2.5px;
            background-color: transparent;
            color: #fff;
            border: 1px solid var(--dark-yellow);

            option {
                color: #fff;
                background-color: #222222;
            }
        }
    }

    button {
        height: 40px;
        margin-top: 1rem;
    }

    @media (max-width: 725px){
        
        

        .calendar-container {
            width: 100%;
            
            .dayCard {
                width: 9%;
                margin: 0.5%;
            }
        }
        
    }
`;