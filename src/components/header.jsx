import { useMedia } from "../contexts/Context"
export default function Header() {
    const { media } = useMedia()
    console.log(`this log below is from the header component! `)
    console.log(media)
    return (
        <>
            <header>
                <nav>
                    <textarea name="search" id=""></textarea>
                    <button>Search</button>
                    {media.map((singleMedia) => (
                        <>
                            <h1>{singleMedia.title}</h1>
                            <span>{singleMedia.overview}</span>
                        </>
                    ))}
                </nav>
            </header>
        </>
    )
}