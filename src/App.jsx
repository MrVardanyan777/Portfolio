import {gsap} from "gsap";
import {NavBar, Welcome, Dock, Home} from "#components"
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

            <Home />
        </main>

    )
}

export default App
