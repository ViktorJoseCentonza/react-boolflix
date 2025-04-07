import { useMedia } from "../contexts/Context"
import SingleCard from "./SingleCard"
export default function CardShelf() {
    const { movies } = useMedia()
    // console.log(`this log below is from the Main component and it is movies `)
    // console.log(movies)

    const { popularMovies } = useMedia()
    // console.log(`this log below is from the Main component and it is popularMovies `)
    // console.log(popularMovies)

    const { tvSeries } = useMedia()
    // console.log(`this log below is from the Main component and it is tvSeries`)
    // console.log(tvSeries)

    const { popularTvSeries } = useMedia()
    // console.log(`this log below is from the Main component and it is popularTvSeries! `)
    // console.log(popularTvSeries)    

    return (
        <>
            <section id="popularMovies">
                <h1>Popular Films</h1>
                <SingleCard media={popularMovies} />
            </section>

            <section id="popularTvSeries">
                <h1>Popular Tv Series</h1>
                <SingleCard media={popularTvSeries} />
            </section>

            <section id="movies">
                <h1>Films</h1>
                <SingleCard media={movies} />
            </section>

            <section id="Tv Series">
                <h1>Tv Series</h1>
                <SingleCard media={tvSeries} />
            </section>
        </>
    )
}