import star from "../assets/star.svg"
export default function Rating(props) {
    return (
        <div className="rating-container">
            {Array.from({ length: props.rating }, (_, i) => <img key={`star-${i}`} className="star" src={star} alt="star"></img>)}
        </div>
    )
}