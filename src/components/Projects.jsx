import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// Daily pulse newspaper images
import NewsImage1 from "../assets/Projects/Daily Pulse/newspaper1.png"
import NewsImage2 from "../assets/Projects/Daily Pulse/newspaper2.png"
import NewsImage3 from "../assets/Projects/Daily Pulse/newspaper3.png"
import NewsImage4 from "../assets/Projects/Daily Pulse/newspaper4.png"
import NewsImage5 from "../assets/Projects/Daily Pulse/newspaper5.png"
import NewsImage6 from "../assets/Projects/Daily Pulse/newspaper6.png"
import NewsImage7 from "../assets/Projects/Daily Pulse/newspaper7.png"
import NewsImage8 from "../assets/Projects/Daily Pulse/newspaper8.png"

// Task management images
import TaskImage1 from "../assets/Projects/TaskManagement/taskmanagement1.png"
import TaskImage2 from "../assets/Projects/TaskManagement/taskmanagement2.png"
import TaskImage3 from "../assets/Projects/TaskManagement/taskmanagement3.png"
import TaskImage4 from "../assets/Projects/TaskManagement/taskmanagement4.png"
import TaskImage5 from "../assets/Projects/TaskManagement/taskmanagement5.png"
import TaskImage6 from "../assets/Projects/TaskManagement/taskmanagement6.png"
import TaskImage7 from "../assets/Projects/TaskManagement/taskmanagement7.png"
import TaskImage8 from "../assets/Projects/TaskManagement/taskmanagement8.png"

// local tour images
import TourImage1 from "../assets/Projects/Local Tour/localtour1.png"
import TourImage2 from "../assets/Projects/Local Tour/localtour2.png"
import TourImage3 from "../assets/Projects/Local Tour/localtour3.png"
import TourImage4 from "../assets/Projects/Local Tour/localtour4.png"
import TourImage5 from "../assets/Projects/Local Tour/localtour5.png"
import TourImage6 from "../assets/Projects/Local Tour/localtour6.png"
import TourImage7 from "../assets/Projects/Local Tour/localtour7.png"
import TourImage8 from "../assets/Projects/Local Tour/localtour8.png"

// menverse images
import MenverseImage1 from '../assets/Projects/Menverse/menverse1.png'
import MenverseImage2 from '../assets/Projects/Menverse/menverse2.png'
import MenverseImage3 from '../assets/Projects/Menverse/menverse3.png'
import MenverseImage4 from '../assets/Projects/Menverse/menverse4.png'
import MenverseImage5 from '../assets/Projects/Menverse/menverse5.png'
import MenverseImage6 from '../assets/Projects/Menverse/menverse6.png'
import MenverseImage7 from '../assets/Projects/Menverse/menverse7.png'


const Projects = () => {
    // project images slider functions
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <section id="projects">
            <section className="p-6 text-gray-800">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white">Recent Completed Projects.</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto justify-center text-gray-600 mt-5">

                    {/* project-1 */}
                    <div className="p-4 shadow-md rounded-md bg-gray-50 text-gray-800">
                        <div className="space-y-4">
                            {/* images */}
                            <div ref={sliderRef} className="keen-slider space-y-2">
                                <div className="keen-slider__slide number-slide1">
                                    <img src={NewsImage1} alt="" className="block object-cover object-center w-full rounded-md bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide2">
                                    <img src={NewsImage2} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide3">
                                    <img src={NewsImage3} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide4">
                                    <img src={NewsImage4} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide5">
                                    <img src={NewsImage5} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide6">
                                    <img src={NewsImage6} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide6">
                                    <img src={NewsImage7} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide6">
                                    <img src={NewsImage8} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                            </div>

                            {/* description */}
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold text-emerald-600">Daily Pulse - A online newspaper portal</h3>
                                </a>
                                <p className="leadi text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            </div>
                        </div>
                    </div>

                    {/* project-2 */}
                    <div className="p-4 shadow-md rounded-md bg-gray-50 text-gray-800">
                        <div className="space-y-4">
                            {/* images */}
                            <div ref={sliderRef} className="keen-slider space-y-2">
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage1} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage2} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage3} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage4} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage5} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage6} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage7} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TaskImage8} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                            </div>
                            {/* description */}
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold text-emerald-600">Task Management - A daily essential tool for everyone.</h3>
                                </a>
                                <p className="leadi text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            </div>
                        </div>
                    </div>

                    {/* project-3 */}
                    <div className=" p-4 shadow-md rounded-md bg-gray-50 text-gray-800">
                        <div className="space-y-4">
                            {/* images */}
                            <div ref={sliderRef} className="keen-slider space-y-2">
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage1} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage2} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage3} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage4} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage5} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage6} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage7} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={TourImage8} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                            </div>
                            {/* description */}
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold text-emerald-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                                </a>
                                <p className="leadi text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            </div>
                        </div>
                    </div>

                    {/* project-4 */}
                    <div className=" p-4 shadow-md rounded-md bg-gray-50 text-gray-800">
                        <div className="space-y-4">
                            {/* images */}
                            <div ref={sliderRef} className="keen-slider space-y-2">
                                <div className="keen-slider__slide number-slide1">
                                    <img src={MenverseImage1} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={MenverseImage2} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={MenverseImage3} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={MenverseImage4} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={MenverseImage5} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={MenverseImage6} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                                <div className="keen-slider__slide number-slide1">
                                    <img src={MenverseImage7} alt="" className="block object-cover object-center w-full rounded-md   bg-gray-500" />
                                </div>
                            </div>
                            {/* description */}
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold text-emerald-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                                </a>
                                <p className="leadi text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Projects;