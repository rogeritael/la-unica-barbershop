import Link from "next/link";
import { Container } from "./styles";

interface ButtonProps {
    text: string,
    link: string
}

export function Button({ text, link }: ButtonProps ){
    return(
        <Container>
            <Link href={link}>
                {text}
            </Link>
        </Container>
    );
}