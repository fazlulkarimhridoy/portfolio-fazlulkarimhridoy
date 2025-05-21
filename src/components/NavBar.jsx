import { useState, useEffect } from "react";
import { Menu, X, Code2, Sparkles } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
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

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? "backdrop-blur-lg bg-gray-500/10 dark:bg-gray-900/20" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="flex items-center gap-2">
                            <Code2 className="w-8 h-8 text-blue-500" />
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    Fazlul Karim
                                </h1>
                                <div className="flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-blue-400" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">React Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300 font-medium text-sm backdrop-blur-sm"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm"
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
                        <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 rounded-lg border border-gray-200/20 dark:border-gray-700/20">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300"
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
