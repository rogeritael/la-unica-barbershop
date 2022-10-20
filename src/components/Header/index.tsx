import { Container } from "./styles";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Button } from "../Button";
import { Socials } from "../Socials";

const links = {
    instagram: "https://www.instagram.com/launicabarbershop_/?utm_medium=copy_link",
    whatsapp: "https://api.whatsapp.com/send?phone=5547992440796&text=Ol%C3%A1%20",
    logoImg: "/images/logo.png"
}

const menu = [
    {
        title: "serviços",
        link: "/"
    },
    {
        title: "fotos",
        link: "/"
    },
    {
        title: "contato",
        link: "/"
    },
    {
        title: "mapa",
        link: "/"
    },
]

export function Header(){
    return(
        <Container>
            <div className="top-header">
                <Socials />
                <figure className="logo">
                    <Image
                        src={links.logoImg}
                        alt="la única logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </figure>
                
                <Button />
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