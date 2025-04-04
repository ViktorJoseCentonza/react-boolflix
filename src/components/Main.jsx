import { useMedia } from "../contexts/Context"

export default function Main() {

    const { movies } = useMedia()
    // console.log(`this log below is from the Main component! `)
    console.log(movies)

    const { tvSeries } = useMedia()
    // console.log(`this log below is from the Main component! `)
    console.log(tvSeries)

    function handleRatings(vote) {
        let normalizedVote = vote / 2;  //reduce rating from 0/10 to 0/5
        Math.ceil(normalizedVote)
        const rating = []
        for (normalizedVote; normalizedVote > 0; normalizedVote--) {
            rating.push('*')
        }

        if (rating.length === 0) {
            rating.push("no votes yet!")
        }
        // console.log(rating)
        return rating
    }

    function handleFlag(language) {
        // `https://www.worldometers.info//img/flags/small/tn_${language.toUpperCase()}-flag.gif`
        // const flagUrl = `https://lipis.github.io/flag-icon-css/flags/4x3/${language.toUpperCase()}.svg`
        const flagUrl = `https://www.worldometers.info//img/flags/small/tn_${language}-flag.gif`
        console.log(flagUrl)
        return flagUrl
    }



    return (
        <main>
            <section id="movies">
                <h1>Films</h1>
                <div className="row d-flex">
                    {movies.map((singleMovie, index) => (
                        <div key={`card-${index}`} className="card">
                            <h2>{singleMovie.title}</h2>
                            <h3>{singleMovie.original_title}</h3>
                            <img className="language-flag" src={handleFlag(singleMovie.original_language)} alt={singleMovie.original_language + "-flag"} />
                            {handleRatings(singleMovie.vote_average).map((star, index) => (
                                <span key={`rating-${singleMovie.title}-${index}`}>{star}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section id="tv-series">
                <h1>Tv Series</h1>
                <div className="row d-flex">
                    {tvSeries.map((singleSerie, index) => (
                        <div key={`card-${index}`} className="card">
                            <h2>{singleSerie.name}</h2>
                            <h3>{singleSerie.original_name}</h3>
                            <img className="language-flag" src={handleFlag(singleSerie.original_language)} alt={singleSerie.original_language + "-flag"} />
                            {handleRatings(singleSerie.vote_average).map((star, index) => (
                                <span key={`rating-${singleSerie.title}-${index}`}>{star}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}