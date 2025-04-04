import { useMedia } from "../contexts/Context"
import SingleCard from "./SingleCard"
export default function CardShelf() {
    const { movies } = useMedia()
    // console.log(`this log below is from the Main component! `)
    console.log(movies)

    const { tvSeries } = useMedia()
    // console.log(`this log below is from the Main component! `)
    console.log(tvSeries)

    if (movies.length === 0 || tvSeries.length === 0) {
        return <div>No results found</div>;
    }


    return (
        <>
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