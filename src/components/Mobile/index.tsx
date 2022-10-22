import { Container } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';
import Link from "next/link";

import { useContext } from "react";
import { Context } from "../../context/MenuContext";
import { MenuProvider } from "../../context/MenuContext";

export function Mobile(){
    const {isMenuOpen, setIsMenuOpen } = useContext<any>(Context);

    function handleClick(){
        setIsMenuOpen(false);
    }

    return(
        <Container isOpen={isMenuOpen}>
            <AiOutlineClose onClick={() => handleClick()}/>

            <ul>
                <Link href="/"><li>Item 1</li></Link>
                <Link href="/"><li>Item 2</li></Link>
                <Link href="/"><li>Item 3</li></Link>
                <Link href="/"><li>Item 4</li></Link>
            </ul>
        </Container>
    );
}