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
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-center lg:text-left"
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 dark:from-yellow-300 dark:via-pink-400 dark:to-purple-500">
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
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={downloadPdf}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 dark:from-yellow-300 dark:to-pink-400 dark:hover:from-yellow-400 dark:hover:to-pink-500 transition-all duration-700 text-white text-sm font-semibold px-10 py-3 rounded-md shadow-lg"
                        >
                            Resume
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={scrollToContact}
                            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 dark:from-purple-400 dark:to-indigo-500 dark:hover:from-purple-500 dark:hover:to-indigo-600 transition-all duration-700 text-white text-sm font-semibold px-10 py-3 rounded-md shadow-lg"
                        >
                            Contact
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
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="mb-10 lg:mb-0"
                >
                    <img
                        src="https://res.cloudinary.com/dmit5qbfo/image/upload/v1747909311/Hridoy-NoBg_cikw8q.png"
                        alt="Author"
                        className="w-[300px] sm:w-[350px] rounded-badge border-[8px] border-transparent bg-clip-padding bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-500 shadow transition-all duration-700 hover:drop-shadow-[0_0_30px_rgba(192,132,252,0.6)]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
