import {gsap} from "gsap";
import {NavBar, Welcome, Dock} from "#components"
import { Terminal } from "#windows";
import {Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable)

/**
 * Root application component that composes the main UI layout.
 *
 * Renders the primary sections — NavBar, Welcome, Dock, and Terminal — inside a <main> container.
 *
 * @returns {JSX.Element} The root JSX element containing the app's main layout.
 */
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