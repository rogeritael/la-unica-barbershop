import React, { createContext, useState } from 'react';

export const Context = createContext({});

export function MenuProvider({children}: {children: React.ReactNode}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menu = [
        {
            title: "serviços",
            link: "#services"
        },
        {
            title: "portifólio",
            link: "#portifolio"
        },
        {
            title: "agende um horário",
            link: "#calendar"
        },
        {
            title: "onde estamos",
            link: "#map"
        },
    ]

    return <Context.Provider value={{isMenuOpen, setIsMenuOpen, menu}}>{children}</Context.Provider>
}