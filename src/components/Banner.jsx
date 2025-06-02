import { Typewriter } from "react-simple-typewriter";
import download from "downloadjs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "animate.css";
import { motion } from "framer-motion";

const Banner = () => {
    const downloadPdf = () => {
        const pdfUrl = "/Resume_Dev_Fazlul_Karim.pdf";
        download(pdfUrl);
    };

    const scrollToContact = () => {
        const section = document.getElementById("contact");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="banner"
            className="bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-white pt-14 lg:pt-40 overflow-hidden min-h-screen"
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between py-10 lg:py-28">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5 }}
                    className="text-center lg:text-left"
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-300 dark:from-gray-200 dark:via-gray-400 dark:to-white">
                        Hello, I{"'"}m Fazlul Karim.
                        <br />A Full Stack{" "}
                        <Typewriter
                            words={["Developer"]}
                            loop={2}
                            cursor
                            cursorStyle="_"
                            cursorColor="gray"
                            typeSpeed={100}
                        />
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-xl text-sm sm:text-xl leading-relaxed">
                        With 1.5 years of professional web development experience, I’ve crafted a range of innovative
                        and functional projects. My expertise spans React.js, TailwindCSS, Express.js, allowing me to
                        build sleek, responsive web applications that deliver exceptional user experiences.
                    </p>

                    <div className="mt-8 flex flex-row justify-center lg:justify-start gap-4">
                        <motion.button whileHover={{ scale: 1.02 }} onClick={downloadPdf}>
                            <h1 className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-300 dark:from-gray-200 dark:via-gray-400 dark:to-white hover:from-gray-600 hover:to-gray-600 dark:hover:from-white dark:hover:to-gray-300 transition-all duration-700 text-white dark:text-black text-sm font-semibold px-10 py-3 rounded-md">
                                Resume
                            </h1>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.02 }} onClick={scrollToContact}>
                            <h1 className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-300 dark:from-gray-200 dark:via-gray-400 dark:to-white hover:from-gray-500 hover:to-gray-500 dark:hover:from-white dark:hover:to-gray-300 transition-all duration-700 text-white dark:text-black text-sm font-semibold px-10 py-3 rounded-md">
                                Contact
                            </h1>
                        </motion.button>
                    </div>

                    <div className="mt-10 flex justify-center lg:justify-start space-x-6">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/fazlulkarimhridoy">
                            <FaGithub
                                size={30}
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                            />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/fazlulkarimhridoy23">
                            <FaLinkedin
                                size={30}
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300  transition-colors"
                            />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/hriiiiiidoy">
                            <FaFacebook
                                size={30}
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300  transition-colors"
                            />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="mb-10 lg:mb-0"
                >
                    <img
                        src="https://res.cloudinary.com/dmit5qbfo/image/upload/v1747909311/Hridoy-NoBg_cikw8q.png"
                        alt="Author"
                        className="bg-gray-300 w-[300px] sm:w-[350px] rounded-badge border-[10px] border-gray-500 shadow-xl hover:shadow-zinc-500 transition-all duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
