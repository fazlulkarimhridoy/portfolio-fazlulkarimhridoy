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
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-sky-300 dark:from-sky-300 dark:via-blue-400 dark:to-blue-500">
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

                    <div className="mt-8 flex flex-row justify-center lg:justify-start gap-4 text-white">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={downloadPdf}
                            className="bg-blue-500 hover:bg-blue-700 transition-all duration-700 px-5 sm:px-10 py-3 rounded-full"
                        >
                            Download Resume
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={scrollToContact}
                            className="bg-gray-500 hover:bg-gray-400 transition-all duration-700 px-5 sm:px-10 py-3 rounded-full"
                        >
                            Get in Touch
                        </motion.button>
                    </div>

                    <div className="mt-10 flex justify-center lg:justify-start space-x-6">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/fazlulkarimhridoy">
                            <FaGithub
                                size={45}
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                            />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/fazlulkarimhridoy23">
                            <FaLinkedin
                                size={45}
                                className="text-sky-700 hover:text-gray-500 dark:hover:text-gray-300  transition-colors"
                            />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/hriiiiiidoy">
                            <FaFacebook
                                size={45}
                                className="text-blue-600 hover:text-gray-500 dark:hover:text-gray-300  transition-colors"
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
                        className="w-[350px] rounded-badge border-[8px] border-transparent bg-clip-padding bg-gradient-to-br from-blue-300 via-blue-200 to-sky-300 shadow transition-all duration-700 hover:drop-shadow-[0_0_30px_rgba(147,197,253,0.6)]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
