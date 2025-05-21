import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "aos/dist/aos.css";
import AOS from "aos";

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // useEffect to fetch data and set to state
    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                setProjectsData(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <section
            id="projects"
            className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-white"
        >
            <div className="max-w-7xl mx-auto">
                <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My Projects
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-center text-gray-600 dark:text-gray-400 mb-10"
                >
                    Recent work that showcases my skills and experience
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
