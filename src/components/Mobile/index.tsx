import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';
import Link from "next/link";

import { useContext } from "react";
import { Context } from "../../context/MenuContext";
import { MenuProvider } from "../../context/MenuContext";

export function Mobile(){
    const { isMenuOpen, setIsMenuOpen } = useContext<any>(Context);

    const menu = [
        {
            title: "serviços",
            link: "#services"
        },
        {
            title: "portifólio",
            link: "#portifolio"
        },
        {
            title: "agende um horário",
            link: "#calendar"
        },
        {
            title: "onde estamos",
            link: "#map"
        },
    ]

    function handleClick(){
        setIsMenuOpen(false);

    }

    return(
        <Container isOpen={isMenuOpen}>
            <AiOutlineClose onClick={() => handleClick()}/>

            <ul>
                {menu.map((menuItem) => (
                    <Link href={menuItem.link} key={menuItem.title}>
                        <li onClick={() => handleClick()}>{menuItem.title}</li>
                    </Link>
                ))}
            </ul>
        </Container>
    );
}