import { createContext, useContext, useState, useEffect } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
const url = "https://api.themoviedb.org/3/search/movie"
const Context = createContext();

function MediaProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTvSeries] = useState([]);
    const [searchText, setSearchText] = useState('marvel')
    const [TriggerApiCall, setTriggerApiCall] = useState(0)

    useEffect(() => {
        console.log(`New movie Fetch executed with ${searchText}`)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
            .catch(error => {
                console.error(error)
            })

        console.log(`New TvSeries Fetch executed with ${searchText}`)
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setTvSeries(data.results)
            })
            .catch(error => {
                console.error(error)
            })
    }, [TriggerApiCall])


    return (
        <Context.Provider
            value={{ movies, tvSeries, searchText, setSearchText, TriggerApiCall, setTriggerApiCall }}>
            {children}
        </Context.Provider>
    )
}

function useMedia() {
    const MediaContext = useContext(Context);
    // console.log(MediaContext)
    return MediaContext;
}

export { MediaProvider, useMedia }