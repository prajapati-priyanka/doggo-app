import { createContext, useContext, useState } from "react";



const DogContext = createContext();

const DogProvider = ({children}) =>{
    const [allDogs, setAllDogs] = useState({});

    return(
        <DogContext.Provider value={{allDogs, setAllDogs}}>
                {children}
        </DogContext.Provider>
    )
};

const useDogs = ()=> useContext(DogContext);

export { DogProvider, useDogs}