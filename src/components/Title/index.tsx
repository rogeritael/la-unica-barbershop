import { Container } from "./styles";
interface TitleProps {
    text: string,
    id?: string
}


export function Title({ text, id }: TitleProps){
    return(
        <Container data-aos="fade-left" id={id}>
            {text}
        </Container>
    );
}