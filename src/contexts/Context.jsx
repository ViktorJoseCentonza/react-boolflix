import { createContext, useContext, useState, useEffect } from "react";
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
const url = "https://api.themoviedb.org/3/search/movie"
const Context = createContext();

function MediaProvider({ children }) {
    const [popularMovies, setPopularMovies] = useState([])
    const [movies, setMovies] = useState([]);
    const [popularTvSeries, setPopularTvSeries] = useState([])
    const [tvSeries, setTvSeries] = useState([]);
    const [searchText, setSearchText] = useState('')
    const [TriggerApiCall, setTriggerApiCall] = useState(0)

    //maybe popular movies and tvseries don't need useState since they only get fetched once?

    function getCredits(mediaList) {
        // console.log("this is the medialist inside getcredits")
        // console.log(mediaList)
        mediaList.map((media) => {
            // console.log("this is the single media inside getcredits")
            // console.log(media)
            // console.log("this is the single media ID inside getcredits")
            // console.log(media.id)
            fetch(`https://api.themoviedb.org/3/movie/${media.id}/credits?api_key=${api_key}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success === false && data.id === undefined) {
                        console.log(`${media.title, media.name} does not have actors data`)
                    } else {
                        media.actors = data.cast;
                    }

                    // console.log("this is the media variable in the context after assigning cast name getCredits function!")
                    // console.log(media.actors)
                })
                .catch(error => {
                    console.error(error)
                })
        })
        // console.log("this is the medialist")
        // console.log(mediaList)
        return mediaList
    }

    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
            .then((res) => res.json())
            .then((data) => {
                setPopularMovies(data.results)
                // console.log(popularMovies)
            })
            .catch(error => {
                console.error(error)
            })
        console.log(`popular movies fetched!`)

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
            .then((res) => res.json())
            .then((data) => {
                setPopularTvSeries(data.results)
                // console.log(popularTvSeries)
            })
            .catch(error => {
                console.error(error)
            })
        console.log(`popular TvSeries fetched!`)
    }, [])

    useEffect(() => {
        // console.log(`New movie Fetch executed with ${searchText}`)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(getCredits(data.results))
                setMovies(getCredits(data.results))
                // console.log("this is the movies variable!")
                // console.log(movies)
            })
            .catch(error => {
                console.error(error)
            })

        // console.log(`New TvSeries Fetch executed with ${searchText}`)
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setTvSeries(getCredits(data.results))
            })
            .catch(error => {
                console.error(error)
            })
    }, [TriggerApiCall])


    return (
        <Context.Provider
            value={{ movies, popularMovies, tvSeries, popularTvSeries, searchText, setSearchText, TriggerApiCall, setTriggerApiCall }}>
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