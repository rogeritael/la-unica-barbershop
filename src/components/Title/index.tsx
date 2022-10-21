import { Container } from "./styles";

export function Title({ text }: {text: string}){
    return(
        <Container>
            {text}
        </Container>
    );
}