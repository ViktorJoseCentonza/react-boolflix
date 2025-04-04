import { useState } from "react"
import { useMedia } from "../contexts/Context"
export default function Header(props) {
    const [searchTextArea, setSearchTextArea] = useState('')
    console.log(props)


    return (
        <>
            <header className="d-flex">
                <section>
                    <nav className="d-flex">
                        <input type="text" name="" id="" onChange={(e) => setSearchTextArea(e.target.value)} value={searchTextArea}></input>
                        <button onClick={() => handleSearchText()}>Search</button>

                    </nav>
                </section>
            </header>
        </>
    )
}