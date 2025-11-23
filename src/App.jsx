import {gsap} from "gsap";
import {NavBar, Welcome, Dock} from "#components"
import { Terminal } from "#windows";
import {Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable)

function App() {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />

            <Terminal />
        </main>

    )
}

export default App
