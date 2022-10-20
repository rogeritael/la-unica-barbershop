import { Button } from "../Button";
import { Container } from "./styles";
import Image from "next/image";

export function Cover(){
    return(
        <Container data-aos="zoom-in">
            <figure>
                <Image
                    src="/images/cover.jpg"
                    alt="/"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="cover-text">
                    <h1>Quem tem estilo, merece estilo. Venha ser único.</h1>
                    {/* <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p> */}
                    <Button />
                </div>
            </figure>
        </Container>
    )
}