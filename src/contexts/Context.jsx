import { createContext, useContext, useState } from "react";

const Context = createContext();

function MediaProvider({ children }) {

    const [media, setMedia] = useState('Hello!');
    return (
        <Context.Provider
            value={{ media, setMedia, }}>
            {children}
        </Context.Provider>
    )
}

function useMedia() {
    const MediaContext = useContext(Context);
    console.log(MediaContext)
    return MediaContext;
}

export { MediaProvider, useMedia }