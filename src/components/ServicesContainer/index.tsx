import React from "react";
import { Container } from "./styles";

import { GiSpikedDragonHead, GiBeard, GiLargePaintBrush } from 'react-icons/gi';
import { RiScissorsLine } from 'react-icons/ri';
import { Title } from "../Title";

const services = [{
        title: "cortes masculinos",
        icon: <RiScissorsLine />
    },
    {
        title: "desenhos personalizados",
        icon: <GiSpikedDragonHead />
    },
    {
        title: "barba e sobrancelha",
        icon: <GiBeard />
    },
    {
        title: "tingimento de cabelo",
        icon: <GiLargePaintBrush />
}];

export function ServicesContainer(){
    return(
        <Container data-aos="fade-up">
            {services.map(service => (
                <div className="card" key="" data-aos="zoom-in">
                    {service.icon}
                    <p>{service.title}</p>
                </div>
            ))}
        </Container>
    );
}