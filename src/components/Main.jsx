import { useMedia } from "../contexts/Context"
export default function Main() {
    const { media } = useMedia()
    console.log(`this log below is from the Main component! `)
    console.log(media)

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
        console.log(rating)
        return rating
    }



    return (
        <main>
            <section>
                <div className="row d-flex">
                    {media.map((singleMedia, index) => (
                        <div key={`card-${index}`} className="card">
                            <h1>{singleMedia.title}</h1>
                            <h2>{singleMedia.original_title}</h2>
                            <div>{singleMedia.original_language}</div>
                            {handleRatings(singleMedia.vote_average).map((star, index) => (
                                <span key={`rating-${singleMedia.title}-${index}`}>{star}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}