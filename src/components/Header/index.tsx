import { Container } from "./styles";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { Socials } from "../Socials";
import { GoThreeBars } from "react-icons/go"; 
import { AiFillCloseSquare } from "react-icons/ai"; 
import { Context } from "../../context/MenuContext";
import { useContext } from "react";


const links = {
    instagram: "https://www.instagram.com/launicabarbershop_/?utm_medium=copy_link",
    whatsapp: "https://api.whatsapp.com/send?phone=5547992440796&text=Ol%C3%A1%20",
    logoImg: "/images/logo.png"
}

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

export function Header(){
    const {setIsMenuOpen} = useContext<any>(Context);

    function handleClickMenu(){
        setIsMenuOpen(true);
    }

    return(
        <Container>
            <div className="top-header">
                <Socials />
                <figure className="logo">
                    <Link href="/">
                    <Image
                        src={links.logoImg}
                        alt="la única logo"
                        layout="fill"
                        objectFit="contain"
                    />
                    </Link>
                </figure>
                

                <GoThreeBars className="menuBar" onClick={() => handleClickMenu()}/>
                <Button text="Reserva" link=""/>
            </div>
            
            <div className="bottom-header">
                <p><span>ENDEREÇO:</span> Av. Palestina, 1460 - Nações</p>
                <ul>
                    {menu.map((menuItem) => (
                        <Link href={menuItem.link} key={menuItem.title}>
                            <li>{menuItem.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </Container>
    );
}