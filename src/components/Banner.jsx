import { Typewriter } from "react-simple-typewriter";
import AuthorImage from "../assets/AuthorPictures/hridoy.jpg"
import download from "downloadjs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {

    const downloadPdf = () => {
        const pdfUrl = 'http://localhost:5173/Fazlul_Karim_React_Developer.pdf';
        download(pdfUrl);
    };

    return (
        <section className="text-white z-10 bg-gray-900">
            <div className="flex flex-row lg:flex-col gap-y-10 gap-x-10 absolute left-[25%] top-[40%] md:left-24 md:top-[75%] lg:left-[5%] lg:top-[43%]">
                <a href="https://github.com/fazlulkarimhridoy"><FaGithub className="hover:text-sky-500" size={50}></FaGithub></a>
                <a href="https://www.linkedin.com/in/fazlulkarimhridoy23"><FaLinkedin className="hover:text-sky-500" size={50}></FaLinkedin></a>
                <a href="https://www.facebook.com/syed.fazlul.karim.hridoy"><FaFacebook className="hover:text-sky-500" size={50}></FaFacebook></a>
            </div>
            <div className="mx-auto md:pt-5 lg:pt-10 xl:pt-20 pb-5 md:px-4 lg:px-20 xl:px-60 md:py-5 lg:py-10 xl:py-28 md:flex md:justify-between md:h-dvh md:items-center">
                <div className="text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-sky-500 to-purple-600 bg-clip-text text-3xl lg:text-4xl xl:text-5xl font-extrabold text-transparent">
                        <span className="block"> Hello, I am Fazlul Karim.</span>
                        <span className="sm:block">
                            A Frontend{' '}
                            <Typewriter
                                words={['Developer']}
                                loop={false}
                                cursor
                                cursorStyle='...'
                                cursorColor="white"
                                typeSpeed={100}
                            ></Typewriter>
                        </span>
                    </h1>

                    <p className="text-gray-400 mx-auto px-6 mt-4 max-w-xl text-base lg:text-xl/relaxed">
                        I have learning web developing consistently for last 8 months!
                        Also I have made many functional projects using React.js, TailwindCSS, Javascript.
                    </p>

                    <div className="my-4 md:mt-8 flex flex-col lg:flex-row justify-center px-8 gap-4">
                        <button
                            onClick={downloadPdf}
                            className="block w-full lg:w-1/2 rounded border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 hover:cursor-pointer sm:w-auto">
                            Resume
                        </button>
                        <button
                            className="block w-full lg:w-1/2 rounded border border-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring active:bg-sky-500 hover:cursor-pointer sm:w-auto"                        >
                            Contact
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-20 px-4">
                    <img
                        className="border-[20px] rounded-badge w-[400px] border-gray-700 hover:border-gray-400 hover:transition-all hover:ease-out hover:duration-1000"
                        src={AuthorImage} />
                </div>
            </div>
        </section>
    );
};

export default Banner;