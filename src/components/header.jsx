import { useMedia } from "../contexts/Context"

export default function Header() {
    const { searchText, setSearchText, TriggerApiCall, setTriggerApiCall } = useMedia()


    return (
        <>
            <header className="d-flex">
                <section>
                    <nav className="d-flex">
                        <input type="text" name="" id="" onChange={(e) => setSearchText(e.target.value)} value={searchText}></input>
                        <button onClick={() => {
                            setTriggerApiCall(TriggerApiCall + 1)
                            console.log(TriggerApiCall)
                        }
                        }>Search</button>

                    </nav>
                </section>
            </header>
        </>
    )
}