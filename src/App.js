// App.js
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import List from "./components/List";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import Events from "./components/Events";
gsap.registerPlugin(ScrollTrigger);

function App() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current && triggerRef.current) {
            const pin = gsap.fromTo(sectionRef.current, {
                translateX: 0
            },{
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "1000 top",
                    scrub: .2,
                    pin: true,
                }
            })
            return () => {
                pin.kill();
            }
        }
    }, []);

    return (
        <div className="App">
            <Header/>
            <div className="scroll-section-outer">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                        <Hero/>
                        <List/>
                        <Events/>
                        <List/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
