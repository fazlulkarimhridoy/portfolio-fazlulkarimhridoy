/* eslint-disable react/prop-types */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowUpRight, Monitor } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Image } from "antd";

const ProjectCard = ({ project, index }) => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 1,
                spacing: 0,
            },
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

    const renderTag = (tag, idx) => {
        const colors = [
            "bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-500",
            "bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-500",
            "bg-purple-100 text-purple-800 dark:bg-purple-500/10 dark:text-purple-500",
            "bg-pink-100 text-pink-800 dark:bg-pink-500/10 dark:text-pink-500",
            "bg-cyan-100 text-cyan-800 dark:bg-cyan-500/10 dark:text-cyan-500",
            "bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500",
            "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-500",
        ];

        const color = colors[idx % colors.length];

        return (
            <span key={idx} className={`text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium ${color}`}>
                {tag}
            </span>
        );
    };

    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] overflow-hidden"
        >
            <div ref={sliderRef} className="keen-slider h-48 md:h-56 w-full">
                <Image.PreviewGroup items={project?.images}>
                    {project?.images?.map((image, imgIndex) => (
                        <div key={imgIndex} className="keen-slider__slide">
                            <Image
                                src={image}
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                className="h-full w-full object-cover"
                                preview={{ src: image }} // ensures full-size preview
                            />
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>

            <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">{project.title}</h3>

                {project.highlights && project.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.highlights.map((tag, idx) => renderTag(tag, idx))}
                    </div>
                )}

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                {project.client && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="italic">Freelance project for </span>
                        <a
                            href={project.client.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center"
                        >
                            {project.client.name}
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                        </a>
                    </p>
                )}

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-[10px] sm:text-xs rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 transition-colors"
                    >
                        <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Live Demo</span>
                    </a>

                    {project.clientCode === "private" ? (
                        <span className="flex items-center gap-1 px-3 py-2 text-[10px] sm:text-xs rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                            <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Private Client</span>
                        </span>
                    ) : (
                        <a
                            href={project.clientCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-2 text-[10px] sm:text-xs rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Client Code</span>
                        </a>
                    )}

                    {project.serverCode &&
                        (project.serverCode === "private" ? (
                            <span className="flex items-center gap-1 px-3 py-2 text-[10px] sm:text-xs rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>Private Server</span>
                            </span>
                        ) : (
                            <a
                                href={project.serverCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-3 py-2 text-[10px] sm:text-xs rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>Server Code</span>
                            </a>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
