import Banner from "./Banner";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="bg-base-100">
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
        </div>
    );
};

export default Home;