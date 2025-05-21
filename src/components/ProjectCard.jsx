/* eslint-disable react/prop-types */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = ({ project, index }) => {
    // project images slider functions
    const [sliderRef] = useKeenSlider(
        {
            loop: false,
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    // initializing aos
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            key={index}
            data-aos={"zoom-in-down"}
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="shadow-lg rounded-md bg-gray-50 text-gray-800"
        >
            {/* Images */}
            <div ref={sliderRef} className="keen-slider">
                {project?.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="keen-slider__slide">
                        <img
                            src={image}
                            alt={`Slide ${imgIndex + 1}`}
                            className="block object-cover object-center w-full rounded-md bg-gray-500"
                        />
                    </div>
                ))}
            </div>
            <div className="space-y-4 p-4 lg:p-8">
                {/* Description */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-sky-600 whitespace-nowrap overflow-hidden text-ellipsis">
                        {project.title}
                    </h3>
                    {/* highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.highlights.map((tag, i) => {
                                const colors = [
                                    "bg-sky-100 text-sky-800",
                                    "bg-green-100 text-green-800",
                                    "bg-purple-100 text-purple-800",
                                    "bg-pink-100 text-pink-800",
                                    "bg-yellow-100 text-yellow-800",
                                    "bg-red-100 text-red-800",
                                    "bg-indigo-100 text-indigo-800",
                                    "bg-teal-100 text-teal-800",
                                    "bg-orange-100 text-orange-800",
                                ];
                                const color = colors[i % colors.length]; // rotate colors
                                return (
                                    <span key={i} className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}>
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                    )}
                    <p className="font-medium text-sm text-gray-600">{project.description}</p>
                    {project.client && (
                        <p className="font-medium text-orange-700">
                            <span className="italic"> Freelance project for </span>{" "}
                            <a
                                href={project.client.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-violet-700 underline"
                            >
                                {project.client.name}
                            </a>
                        </p>
                    )}
                    <p className="text-xs flex flex-col md:flex-row items-center text-center gap-3 lg:gap-6 pt-3">
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-sky-600 transition hover:bg-sky-600/10 hover:duration-300 focus:outline-none focus:ring active:text-sky-500 whitespace-nowrap"
                        >
                            Live Demo
                        </a>
                        {project.clientCode === "private" ? (
                            <span className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-red-600 transition hover:bg-red-600/10 hover:duration-300 focus:outline-none focus:ring active:text-red-500 whitespace-nowrap">
                                Private Client
                            </span>
                        ) : (
                            <a
                                href={project.clientCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-sky-600 transition hover:bg-sky-600/10 hover:duration-300 focus:outline-none focus:ring active:text-sky-500 whitespace-nowrap"
                            >
                                Client Code
                            </a>
                        )}

                        {project.serverCode === "private" ? (
                            <span className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-red-600 transition hover:bg-red-600/10 hover:duration-300 focus:outline-none focus:ring active:text-red-500 whitespace-nowrap">
                                Private Server
                            </span>
                        ) : project.serverCode ? (
                            <a
                                href={project.serverCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-sky-600 transition hover:bg-sky-600/10 hover:duration-300 focus:outline-none focus:ring active:text-sky-500 whitespace-nowrap"
                            >
                                Server Code
                            </a>
                        ) : null}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
