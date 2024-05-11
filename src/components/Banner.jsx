import { Typewriter } from "react-simple-typewriter";
import AuthorImage from "../assets/AuthorPictures/hridoy.jpg"
import download from "downloadjs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import 'animate.css';
import { motion } from "framer-motion";
// import "../Css/Banner.css"


const Banner = () => {

    const downloadPdf = () => {
        const pdfUrl = '/Fazlul_Karim_MernStack_Developer.pdf';
        download(pdfUrl);
    };

    // scroll to contact
    const scrollToContact = () => {
        const section = document.getElementById("contact");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="banner" className="text-white bg-gray-900 overflow-hidden pt-14">
            <div className="mx-auto md:pt-5 lg:pt-10 xl:pt-20 pb-5 md:px-4 lg:px-20 xl:px-60 md:py-5 lg:py-10 xl:py-28 md:flex md:justify-between md:h-dvh md:items-center">
                <div className="text-center animate__animated animate__bounceInLeft">
                    <h1 className="bg-gradient-to-r from-green-300 via-sky-500 to-purple-600 bg-clip-text text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent mt-5 md:mt-0">
                        <span className="block"> Hello, I am Fazlul Karim.</span>
                        <span className="sm:block">
                            A Full Stack{' '}
                            <Typewriter
                                words={['Developer']}
                                loop={2}
                                cursor
                                cursorStyle='...'
                                cursorColor="white"
                                typeSpeed={100}
                            ></Typewriter>
                        </span>
                    </h1>

                    <p className="text-gray-400 mx-auto px-6 mt-4 max-w-xl text-base lg:text-xl/relaxed">
                        I have been learning web developing consistently for last 8 months!
                        Also I have made many functional projects using React.js, TailwindCSS, Javascript.
                    </p>

                    <div className="my-4 md:mt-8 flex flex-col lg:flex-row justify-center px-8 gap-4 md:gap-8">
                        <div
                            onClick={downloadPdf}
                            className="block w-full lg:w-1/2 focus:hidden rounded border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white hover:duration-300 focus:outline-none focus:ring active:text-opacity-75 hover:cursor-pointer sm:w-auto">
                            Resume
                        </div>
                        <div
                            onClick={scrollToContact}
                            className="block w-full lg:w-1/2 focus:hidden rounded border border-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring active:bg-sky-500 hover:duration-300 hover:cursor-pointer sm:w-auto"                        >
                            Contact
                        </div>
                    </div>
                    <div className="lg:gap-y-10 lg:-mt-[260px] lg:-ml-[550px] xl:-ml-[700px] flex flex-row lg:flex-col items-center justify-center gap-x-10 md:gap-x-16 mt-5 md:mt-10">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}>
                            <a href="https://github.com/fazlulkarimhridoy">
                                <FaGithub className="hover:text-sky-500" size={50}>
                                </FaGithub>
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}>
                            <a href="https://www.linkedin.com/in/fazlulkarimhridoy23">
                                <FaLinkedin className="hover:text-sky-500" size={50}>
                                </FaLinkedin>
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}>
                            <a href="https://www.facebook.com/syed.fazlul.karim.hridoy">
                                <FaFacebook className="hover:text-sky-500" size={50}>
                                </FaFacebook>
                            </a>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center mt-5 px-4">
                    <img
                        id="blob"
                        className="animate__animated animate__bounceInRight border-[18px] rounded-badge w-[350px] border-gray-700 hover:border-gray-500 hover:transition-all hover:ease-out hover:duration-1000"
                        src={AuthorImage} />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;