import { createRef, use, useEffect, useState } from "react";
import "./App.css";¨
import { Scrollbar } from "./components/Scrollbar/Scrollbar";


export function App() {
    // Lav en ref (reference) til vores yderst div (containeren der pakker der hele ind)
    const divRef = createRef<HTMLDivElement>();

// Lav State til at gemme scoll procenten
const [scrollPercent, setScrollPercent] = useState<number>(0);

useEffect(() => {
    // Lav en event listener der lytter på scroll eventet på vores div
    const scrollListener = () => {
        // Gem Scroll værdien fra vinduets scrollY
        const scroll = window.scrollY;

        if (divRef.current) return

        else {
            const ScrollMax =
            divRef.current.getBoundingClientRect().height -
            window.innerHeight;

            const percent = Math.round((scroll / ScrollMax) * 100);

            console.log("Scroll: ", scroll);
            console.log("divRef: ", ScrollMax)
            console.log("Percentage Scrolled ", percent);

        }
        }
        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
}, [divRef]);

return (
    <div ref={divRef}>
    <Scrollbar scrollPercent={scrollPercent} />
    </div>
)
}
