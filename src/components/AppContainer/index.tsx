import React from "react";
import { Container } from "./styles";

export function AppContainer({children}: {children: React.ReactNode}){
    return(
        <Container>
            {children}
        </Container>
    )
}