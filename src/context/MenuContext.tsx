import React, { createContext, useState } from 'react';

export const Context = createContext({});

export function MenuProvider({children}: {children: React.ReactNode}){
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return <Context.Provider value={{isMenuOpen, setIsMenuOpen}}>{children}</Context.Provider>
}