import Rating from "./Rating"
export default function SingleCard(props) {
    const mediaList = props.media
    let title_key = "title"
    let original_title_key = "original_title"

    if (mediaList[0] == undefined) {
        return <div>No results found</div>;
    }

    if (mediaList[0][title_key] == undefined) {

        title_key = "name"
        original_title_key = "original_name"
    }

    function checkCurrentAndOriginalName(currentTitle, originalTitle) {
        if (currentTitle == originalTitle) {
            return
        } else {
            return (
                <h3>{originalTitle}</h3>
            )
        }
    }

    function isBackgroundPresent(singleMedia) {
        if (singleMedia.poster_path != undefined) {
            return `https://image.tmdb.org/t/p/w342/${singleMedia.poster_path}`
        } else return "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
    }


    return (
        <div className="row d-flex">
            {mediaList.map((singleMedia, index) => (

                <div key={`card-${index}`} className="col card" style={{ backgroundImage: `url(${isBackgroundPresent(singleMedia)} )` }}>
                    <div className="card-overlay">

                        <div className="card-head">
                            <h2>{singleMedia[title_key]}</h2>
                        </div>
                        <div className="card-body">
                            {checkCurrentAndOriginalName(singleMedia[title_key], singleMedia[original_title_key])}
                            <img className="language-flag" src={`https://www.worldometers.info//img/flags/small/tn_${singleMedia.original_language === "en" ? "uk" : singleMedia.original_language}-flag.gif`} alt={singleMedia.original_language + "-flag"} />

                        </div>
                        <Rating rating={singleMedia.vote_average / 2} />
                    </div>
                </div>
            ))
            }
        </div >
    )








    // return (
    //     <div className="row d-flex">
    //         {mediaList.map((singleMedia, index) => (
    //             <div key={`card-${index}`} className="col card">
    //                 <div className="card-head">
    //                     <h2>{singleMedia.title != undefined ? singleMedia.title : singleMedia.name}</h2>
    //                 </div>
    //                 <div className="card-body">
    //                     {/* <h3>{singleMedia.original_title != undefined ? singleMedia.original_title : singleMedia.original_name}</h3> */}
    //                     {singleMedia.original_title != undefined ? checkCurrentAndOriginalName(singleMedia.title, singleMedia.original_title) : checkCurrentAndOriginalName(singleMedia.name, singleMedia.original_name)}
    //                     <img className="language-flag" src={`https://www.worldometers.info//img/flags/small/tn_${singleMedia.original_language === "en" ? "uk" : singleMedia.original_language}-flag.gif`} alt={singleMedia.original_language + "-flag"} />
    //                     {handleRatings(singleMedia.vote_average).map((star, index) => (
    //                         <span key={`rating-${singleMedia.title}-${index}`}>{star}</span>
    //                     ))}
    //                 </div>
    //                 <img src={singleMedia.poster_path != undefined ? `https://image.tmdb.org/t/p/w185/${singleMedia.poster_path}` : "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"} alt="Media-image" />

    //             </div>
    //         ))}
    //     </div>
    // )
}