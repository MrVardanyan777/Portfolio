import {gsap} from "gsap";
import {NavBar, Welcome, Dock} from "#components"
import {Resume, Safari, Terminal, Finder, Text, Image, Contact} from "#windows";
import {Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable)

function App() {
    return (
        <main>
            <NavBar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
        </main>

    )
}

export default App
