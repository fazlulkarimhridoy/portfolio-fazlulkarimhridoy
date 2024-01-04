import Banner from "./Banner";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
        </div>
    );
};

export default Home;