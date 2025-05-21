import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>
                <Banner />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
