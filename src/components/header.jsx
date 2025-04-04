import { useMedia } from "../contexts/Context"
export default function Header() {
    const { media } = useMedia()
    console.log(media)
    return (
        <>
            <header>
                <nav>
                    <textarea name="search" id=""></textarea>
                    <button>Search</button>
                    <div>{media}</div>
                </nav>
            </header>
        </>
    )
}