import { Typewriter } from "react-simple-typewriter";
import AuthorImage from "../assets/AuthorPictures/hridoy.jpg"
import download from "downloadjs";

const Banner = () => {
    const downloadPdf = () => {
        const pdfUrl = 'http://localhost:5173/Fazlul_Karim_React_Developer.pdf';
        download(pdfUrl);
    };
    return (
        <section className="text-white z-10 bg-gray-900">
            <div className="mx-auto sm:px-60 py-20 lg:py-28 lg:flex lg:justify-between lg:h-dvh lg:items-center">
                <div className="text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-sky-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                        Hello, I am Fazlul Karim.
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

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        I have learning web developing consistently for last 8 months!
                        Also I have made many functional projects using React.js, TailwindCSS, Javascript.
                    </p>

                    <div className="mt-8 flex flex-wra justify-center px-4 gap-4">
                        <button
                            onClick={downloadPdf}
                            className="block w-1/2 rounded border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 hover:scale-110 hover:transition-all hover:duration-300 hover:cursor-pointer sm:w-auto">
                            Resume
                        </button>
                        <button
                            className="block w-1/2 rounded border border-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring active:bg-sky-500 hover:scale-110 hover:transition-all hover:duration-300 hover:cursor-pointer sm:w-auto"                        >
                            Contact
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <img
                        className="border-[20px] rounded-badge w-[400px] border-gray-700 hover:border-gray-400 hover:transition-all hover:ease-out hover:duration-1000"
                        src={AuthorImage} />
                </div>
            </div>
        </section>
    );
};

export default Banner;