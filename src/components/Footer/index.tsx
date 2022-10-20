import { Socials } from "../Socials";
import { Container } from "./styles";

export function Footer(){
    return(
        <Container>
            <p>2022 &#169; <span>La Unica Barbershop</span>. Todos os direitos reservados</p>
            <Socials />
        </Container>
    );
}