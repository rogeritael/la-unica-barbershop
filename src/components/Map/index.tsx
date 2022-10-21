import { Container } from "./styles";

export function Map(){
    return(
        <Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.551563540711!2d-48.649197784953756!3d-26.981096783098227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8ca05b7657cb3%3A0x74537f0b2828547a!2sAv.%20Palestina%2C%201460%20-%20Na%C3%A7%C3%B5es%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088338-010!5e0!3m2!1spt-PT!2sbr!4v1666193731368!5m2!1spt-PT!2sbr" width="600" height="450"  loading="lazy" ></iframe>
        </Container>
    );
}