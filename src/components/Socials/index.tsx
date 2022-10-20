import Link from "next/link";
import { Container } from "./styles";
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const links = {
    instagram: "https://www.instagram.com/launicabarbershop_/?utm_medium=copy_link",
    whatsapp: "https://api.whatsapp.com/send?phone=5547992440796&text=Ol%C3%A1%20"
}

export function Socials(){
    return(
        <Container>
            <Link href={links.instagram}><BsInstagram/></Link>
            <Link href={links.whatsapp}><BsWhatsapp/></Link>
        </Container>
    )
}