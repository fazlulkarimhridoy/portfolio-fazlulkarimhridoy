/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");


    useEffect(() => {
        const sectionOffsets = navLinks
            .map((link) => {
                const el = document.getElementById(link.id);
                return el ? { id: link.id, offsetTop: el.offsetTop } : null;
            })
            .filter(Boolean);

        const handleScroll = () => {
            const scrollY = window.scrollY + 100; // Add some offset for better accuracy
            for (let i = sectionOffsets.length - 1; i >= 0; i--) {
                if (scrollY >= sectionOffsets[i].offsetTop) {
                    setActiveSection(sectionOffsets[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll handlers
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    const navLinks = [
        { name: "About", id: "banner" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Education", id: "education" },
        { name: "Contact", id: "contact" },
    ];

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
    };

    const iconVariants = {
        initial: { scale: 0, opacity: 0, rotate: -180 },
        animate: { scale: 1, opacity: 1, rotate: 0 },
        exit: { scale: 0, opacity: 0, rotate: 180 },
    };

    const twinkleVariants = {
        animate: {
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            },
        },
    };

    return (
        <header className="fixed w-full z-50 transition-all duration-300 backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border-b border-gray-200/20 dark:border-gray-700/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="relative flex items-center gap-2">
                        {/* Twinkling Stars */}
                        <motion.div
                            className="absolute -top-2 -left-2 text-yellow-400"
                            variants={twinkleVariants}
                            animate="animate"
                            style={{ fontSize: "12px" }}
                        >
                            <FaStar />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-3 -right-3 text-yellow-300"
                            variants={twinkleVariants}
                            animate="animate"
                            transition={{ duration: 4, repeatDelay: 1 }}
                            style={{ fontSize: "10px" }}
                        >
                            <FaStar />
                        </motion.div>

                        <motion.div
                            className="absolute top-1 left-8 text-yellow-300"
                            variants={twinkleVariants}
                            animate="animate"
                            transition={{ duration: 3.5, repeatDelay: 0.5 }}
                            style={{ fontSize: "8px" }}
                        >
                            <FaStar />
                        </motion.div>

                        {/* Logo and Text */}
                        <Link to="/" onClick={() => scrollToSection("banner")} className="flex items-center gap-2 z-10">
                            <Code2 className="w-8 h-8 text-blue-500" />
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-transparent animate-shimmer bg-[length:400%_100%]">
                                    Fazlul Karim
                                </h1>
                                <div className="flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-blue-400" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">Software Developer</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${
                activeSection === link.id
                    ? "bg-gradient-to-r from-blue-600 to-sky-300 text-white"
                    : "text-gray-700 bg-gray-500/10 dark:text-gray-300 dark:hover:bg-gray-800/30 hover:bg-gradient-to-r from-blue-600 to-sky-300 hover:text-white"
            }`}
                            >
                                {link.name}
                            </button>
                        ))}

                        {/* Theme Toggle Button */}
                        <div className="relative ml-4 scale-90">
                            <motion.div
                                className="flex items-center justify-center w-14 h-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-300 dark:bg-gray-800/40 cursor-pointer backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/50 transition-colors"
                                onClick={() => setDarkMode(!darkMode)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center"
                                    layout
                                    transition={spring}
                                    style={{ x: darkMode ? "24px" : "0px" }}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.div
                                            key={darkMode ? "moon" : "sun"}
                                            variants={iconVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.2 }}
                                        >
                                            {darkMode ? (
                                                <Moon className="w-4 h-4 text-blue-400" />
                                            ) : (
                                                <Sun className="w-4 h-4 text-yellow-500" />
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Mobile Theme Toggle */}
                        <div className="relative scale-90">
                            <motion.div
                                className="flex items-center justify-center w-14 h-8 rounded-full bg-white/20 dark:bg-gray-800/40 cursor-pointer backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/50 transition-colors"
                                onClick={() => setDarkMode(!darkMode)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center"
                                    layout
                                    transition={spring}
                                    style={{ x: darkMode ? "24px" : "0px" }}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.div
                                            key={darkMode ? "moon" : "sun"}
                                            variants={iconVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.2 }}
                                        >
                                            {darkMode ? (
                                                <Moon className="w-4 h-4 text-blue-400" />
                                            ) : (
                                                <Sun className="w-4 h-4 text-yellow-500" />
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/30"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 rounded-lg border border-gray-200/20 dark:border-gray-700/20 mb-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`block w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300
            ${
                activeSection === link.id
                    ? "bg-gradient-to-r from-blue-600 to-sky-300 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/30"
            }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
