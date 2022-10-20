import { Container } from "./styles";

export function Title({ text }: {text: string}){
    return(
        <Container data-aos="fade-left">
            {text}
        </Container>
    );
}