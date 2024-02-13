import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import 'animate.css';
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";

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
            loop: false,
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
                    }, 5000)
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

    // initializing aos
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <section className="py-10 px-2 md:px-6 text-gray-800 overflow-hidden">
            <div className="container p-4 mx-auto text-center">
                <h4 className="text-base font-medium text-black">
                    All Projects
                </h4>
                <h2 className="text-4xl font-bold text-black">
                    Recent Completed Projects.
                </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center mx-auto justify-center text-gray-600 mt-5">

                {/* project-1 */}
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="p-4 md:p-8 shadow-lg rounded-md bg-gray-50 text-gray-800">
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
                            <div className="block">
                                <h3 className="text-lg font-semibold text-emerald-600">
                                    Daily Pulse - A online newspaper portal
                                </h3>
                            </div>
                            <p className="font-medium text-sm text-gray-600">
                                Online news portal that shows publishers regular and premium news and admin can manage all the works in admin section.
                            </p>
                            <p className="text-xs text-gray-600">
                                <span className="font-bold text-gray-600">
                                    Frontend
                                </span>
                                <span className="font-medium">
                                    : React.js, Tailwind CSS, DaisyUI, MambaUI, Hyper UI, react-countup.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Backend
                                </span>
                                <span className="font-medium">
                                    : Node.js, Express.js.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Database
                                </span>
                                <span className="font-medium">
                                    : MongoDB
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Authentication :
                                </span>
                                <span className="font-medium">
                                    : Firebase authentication with jwt set at cookies.
                                </span>
                            </p>
                            <p className="flex flex-col md:flex-row items-center text-center gap-2 md:gap-8 pt-3">
                                <a href="https://newspaper-client.vercel.app"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500">
                                    Live Demo
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/daily-pulse-newspaper-client"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500">
                                    Client Code
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/newspaper-project-server"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500">
                                    Server Code
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* project-2 */}
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="animated p-4 md:p-8 shadow-lg rounded-md bg-gray-50 text-gray-800">
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
                            <a className="block">
                                <h3 className="text-lg font-semibold text-emerald-600">
                                    Task Management - A daily essential tool for everyone.
                                </h3>
                            </a>
                            <p className="text-sm font-medium text-gray-600">
                                A complete task management solution for those who needs a task assistant in everyday works. DnD is implemented in dashboard.
                            </p>
                            <p className="text-xs text-gray-600">
                                <span className="font-bold text-gray-600">
                                    Frontend
                                </span>
                                <span className="font-medium">
                                    : React.js, Tailwind CSS, DaisyUI, MambaUI, Hyper UI, react-dnd.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Backend
                                </span>
                                <span className="font-medium">
                                    : Node.js, Express.js.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Database
                                </span>
                                <span className="font-medium">
                                    : MongoDB
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Authentication :
                                </span>
                                <span className="font-medium">
                                    : Firebase authentication.
                                </span>
                            </p>
                            <p className="flex flex-col md:flex-row items-center text-center gap-2 md:gap-8 pt-3">
                                <a href="https://task-management-ruby-psi.vercel.app"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-sky-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-sky-500">
                                    Live Demo
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/task-management"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-sky-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-sky-500">
                                    Client Code
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/task-management"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-sky-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-sky-500">
                                    Server Code
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* project-3 */}
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="animated p-4 md:p-8 shadow-lg rounded-md bg-gray-50 text-gray-800">
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
                            <a className="block">
                                <h3 className="text-lg font-semibold text-emerald-600">
                                    Local Tour Guide - Complete tour problem solution.
                                </h3>
                            </a>
                            <p className="font-medium text-sm text-gray-600">
                                Tour guide is a tour service based website where user can find a suitable guide for them and they can also create guide services.
                            </p>
                            <p className="text-xs text-gray-600">
                                <span className="font-bold text-gray-600">
                                    Frontend
                                </span>
                                <span className="font-medium">
                                    : React.js, Tailwind CSS, DaisyUI, MambaUI, Hyper UI, react-simple-typewriter.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Backend
                                </span>
                                <span className="font-medium">
                                    : Node.js, Express.js.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Database
                                </span>
                                <span className="font-medium">
                                    : MongoDB
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Authentication :
                                </span>
                                <span className="font-medium">
                                    : Firebase authentication with jwt set at cookies.
                                </span>
                            </p>
                            <p className="flex flex-col md:flex-row items-center text-center gap-2 md:gap-8 pt-3">
                                <a href="https://local-tour-client.vercel.app"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-cyan-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-cyan-500">
                                    Live Demo
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/local-tour-guide-client"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-cyan-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-cyan-500">
                                    Client Code
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/local-tour-project-server"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-cyan-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-cyan-500">
                                    Server Code
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* project-4 */}
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="animated p-4 md:p-8 shadow-lg rounded-md bg-gray-50 text-gray-800">
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
                            <a className="block">
                                <h3 className="text-lg font-semibold text-emerald-600">
                                    Menverse - A clothing brand shop.
                                </h3>
                            </a>
                            <p className="font-medium text-sm text-gray-600">
                                A proper brand solution. User can see category wise products as well as they can add their desired products in the cart section.
                            </p>
                            <p className="text-xs text-gray-600">
                                <span className="font-bold text-gray-600">
                                    Frontend
                                </span>
                                <span className="font-medium">
                                    : React.js, Tailwind CSS, DaisyUI, MambaUI, Hyper UI.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Backend
                                </span>
                                <span className="font-medium">
                                    : Node.js, Express.js.
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Database
                                </span>
                                <span className="font-medium">
                                    : MongoDB
                                </span> <br />
                                <span className="font-bold text-gray-600">
                                    Authentication :
                                </span>
                                <span className="font-medium">
                                    : Firebase authentication.
                                </span>
                            </p>
                            <p className="flex flex-col md:flex-row text-center items-center gap-2 md:gap-8 pt-3">
                                <a href="https://brand-shop-assignment.vercel.app"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-pink-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-pink-500">
                                    Live Demo
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/menverse-brand-shop-client"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-pink-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-pink-500">
                                    Client Code
                                </a>
                                <a href="https://github.com/fazlulkarimhridoy/menverse-brandshop-project-server"
                                    className="w-full cursor-pointer inline-block rounded border border-current px-4 py-2 text-sm font-medium text-pink-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-pink-500">
                                    Server Code
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;