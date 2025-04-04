import { createContext, useContext, useState, useEffect } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
const Context = createContext();

function MediaProvider({ children }) {
    const [media, setMedia] = useState([]);
    const [searchText, setsearchText] = useState('ritorno')

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setMedia(data.results)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <Context.Provider
            value={{ media, setMedia, searchText, setsearchText }}>
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