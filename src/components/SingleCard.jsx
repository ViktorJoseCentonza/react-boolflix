export default function SingleCard(props) {
    const mediaList = props.media

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
    return (
        <div className="row d-flex">
            {mediaList.map((singleMedia, index) => (
                <div key={`card-${index}`} className="card">
                    <h2>{singleMedia.title != undefined ? singleMedia.title : singleMedia.name}</h2>
                    <img src={singleMedia.poster_path != undefined ? `https://image.tmdb.org/t/p/w185/${singleMedia.poster_path}` : "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"} alt="Media-image" />
                    <h3>{singleMedia.original_title != undefined ? singleMedia.original_title : singleMedia.original_name}</h3>
                    <img className="language-flag" src={`https://www.worldometers.info//img/flags/small/tn_${singleMedia.original_language === "en" ? "uk" : singleMedia.original_language}-flag.gif`} alt={singleMedia.original_language + "-flag"} />
                    {handleRatings(singleMedia.vote_average).map((star, index) => (
                        <span key={`rating-${singleMedia.title}-${index}`}>{star}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}