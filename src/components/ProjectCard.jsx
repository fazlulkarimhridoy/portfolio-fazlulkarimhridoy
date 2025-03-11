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
            <div ref={sliderRef} className="keen-slider space-y-2">
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
                    <p className="font-medium text-sm text-gray-600">{project.description}</p>
                    <p className="text-xs flex flex-col md:flex-row items-center text-center gap-3 lg:gap-6 pt-3">
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-sky-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-sky-500 whitespace-nowrap"
                        >
                            Live Demo
                        </a>
                        <a
                            href={project.clientCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-sky-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-sky-500 whitespace-nowrap"
                        >
                            Client Code
                        </a>
                        {project.serverCode && (
                            <a
                                href={project.serverCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto cursor-pointer inline-block rounded border border-current px-4 py-2 font-medium text-sky-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-sky-500 whitespace-nowrap"
                            >
                                Server Code
                            </a>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
