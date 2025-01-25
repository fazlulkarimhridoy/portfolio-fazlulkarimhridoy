import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    // useEffect to fetch data and set to state
    useEffect(() => {
        // fetch data from API
        // replace with your own API endpoint
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                setProjectsData(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <section id="projects" className="py-10 px-2 md:px-6 text-gray-800 overflow-hidden">
            <div className="container p-4 mx-auto text-center">
                <h4 className="text-base font-medium text-gray-400">All Projects</h4>
                <h2 className="text-4xl font-bold text-black">Recent Completed Projects.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center mx-auto justify-center text-gray-600 mt-5">
                {projectsData?.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
