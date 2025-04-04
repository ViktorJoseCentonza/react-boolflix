import { createContext, useContext, useState } from "react";
const api_key = import.meta.env.MOVIE_DB_API_KEY;
const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;
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