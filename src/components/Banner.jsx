import AuthorImage from "../assets/AuthorPictures/hridoy.jpg"
const Banner = () => {
    return (
        <section className="text-white z-10">
            <div className="mx-auto sm:px-40 py-20 lg:py-28 lg:flex lg:justify-between lg:h-[800px] lg:items-center">
                <div className="text-center mx-auto">
                    <h1 className="bg-gradient-to-r from-green-300 via-sky-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                        Hello, I am Fazlul Karim.
                        <span className="sm:block"> A Frontend Web Developer. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        I have learning web developing consistently for last 8 months!
                        Also I have made many functional projects using React.js, TailwindCSS, Javascript.
                    </p>

                    <div className="mt-8 flex flex-wra justify-center px-4 gap-4">
                        <a href="../assets/Resume/Fazlul_Karim_Front_End_Developer_Resume.pdf" download="../assets/Resume/Fazlul_Karim_Front_End_Developer_Resume.pdf" className="block w-1/2 rounded border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                            
                            Resume
                        </a>

                        <a className="block w-1/2 rounded border border-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"                        >
                            Contact
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <img className="border-[20px] rounded-full w-[375px] border-gray-700" 
                    src={AuthorImage} />
                </div>
            </div>
        </section>
    );
};

export default Banner;