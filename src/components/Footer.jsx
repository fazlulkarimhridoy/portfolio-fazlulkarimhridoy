import { Copyright } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-[#1e1e1e] border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 md:px-10 lg:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Fazlul Karim
                        </h2>
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            React Developer
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <motion.a // Added motion component
                            whileHover={{ scale: 1.2 }} // Added hover animation
                            href="https://github.com/fazlulkarimhridoy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300"
                        >
                            <FaGithub // Changed to FaGithub
                                size={30} // Adjusted size for consistency, adjust as needed
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors" // Added class from Banner.jsx
                            />
                        </motion.a>
                        <motion.a // Added motion component
                            whileHover={{ scale: 1.2 }} // Added hover animation
                            href="https://www.linkedin.com/in/fazlulkarimhridoy23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300"
                        >
                            <FaLinkedin // Changed to FaLinkedin
                                size={30} // Adjusted size for consistency, adjust as needed
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors" // Added class from Banner.jsx
                            />
                        </motion.a>
                        <motion.a // Added motion component
                            whileHover={{ scale: 1.2 }} // Added hover animation
                            href="https://www.facebook.com/hriiiiiidoy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300"
                        >
                            <FaFacebook // Changed to FaFacebook
                                size={30} // Adjusted size for consistency, adjust as needed
                                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors" // Added class from Banner.jsx
                            />
                        </motion.a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Copyright className="w-4 h-4" />
                        <p>{currentYear} Fazlul Karim. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
