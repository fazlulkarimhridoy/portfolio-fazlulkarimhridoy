import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import NameLogo from "../assets/Logos/image.png"
const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="mx-auto py-2 lg:py-6 sm:px-6 lg:px-10">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <img className="w-32" src={NameLogo} />
                    </div>
                    <div className="flex flex-row items-center gap-4 text-white">
                        <a href="https://github.com/fazlulkarimhridoy" className="hover:text-sky-500">
                            <FaGithub size={22}></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/fazlulkarimhridoy23" className="hover:text-sky-500">
                            <FaLinkedin size={22}></FaLinkedin></a>
                        <a href="https://www.facebook.com/syed.fazlul.karim.hridoy" className="hover:text-sky-500">
                            <FaFacebook size={22}></FaFacebook>
                        </a>
                    </div>

                </div>
                <p className="mt-4 text-center items-center text-sm text-white">
                    Copyright &copy; 2023. All rights reserved to <span className="block sm:inline-block">Fazlul Karim (React-Developer).</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;