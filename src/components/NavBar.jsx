import { Link } from "react-router-dom";
import "../Css/NavBar.css";
import { FaAlignJustify } from "react-icons/fa";
import NameLogo from "/assets/Logos/image.png";
import { Drawer } from "antd";
import { useState } from "react";

const NavBar = () => {
    // Scroll handlers
    const scrollToSkills = () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToEducations = () => {
        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToBanner = () => {
        document.getElementById("banner")?.scrollIntoView({ behavior: "smooth" });
    };

    // Drawer state
    const [open, setOpen] = useState(false);
    const [placement] = useState("left");
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    // Shared nav links styled as "tabs"
    const links = (
        <>
            <li
                onClick={() => {
                    scrollToBanner();
                    onClose();
                }}
                className="cursor-pointer tab-item"
            >
                About
            </li>
            <li
                onClick={() => {
                    scrollToSkills();
                    onClose();
                }}
                className="cursor-pointer tab-item"
            >
                Skills
            </li>
            <li
                onClick={() => {
                    scrollToProjects();
                    onClose();
                }}
                className="cursor-pointer tab-item"
            >
                Projects
            </li>
            <li
                onClick={() => {
                    scrollToEducations();
                    onClose();
                }}
                className="cursor-pointer tab-item"
            >
                Education
            </li>
            <li
                onClick={() => {
                    scrollToContact();
                    onClose();
                }}
                className="cursor-pointer tab-item"
            >
                Contact
            </li>
        </>
    );

    return (
        <header className="fixed z-30 w-full backdrop-blur-md bg-white/10 dark:bg-gray-800/30 shadow-sm">
            <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-6 sm:px-10 py-3">
                {/* Logo */}
                <div className="navbar-start">
                    <Link to="/">
                        <img src={NameLogo} alt="Logo" className="w-32" />
                    </Link>
                </div>

                {/* Hamburger & Drawer for mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={showDrawer}
                        className="rounded p-2 text-gray-200 hover:text-white transition-colors duration-300"
                        aria-label="Open menu"
                    >
                        <FaAlignJustify size={25} />
                    </button>
                    <Drawer
                        closeIcon={false}
                        width={220}
                        placement={placement}
                        onClose={onClose}
                        open={open}
                        style={{
                            backdropFilter: "blur(12px)",
                            backgroundColor: "rgb(22,25,30)",
                        }}
                        bodyStyle={{
                            backdropFilter: "blur(12px)",
                            backgroundColor: "rgb(22,25,30)",
                            paddingTop: "40px",
                        }}
                        maskStyle={{
                            backdropFilter: "blur(6px)",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        <ul id="link2" className="flex flex-col items-center gap-6 text-white font-semibold text-xl">
                            {links}
                        </ul>
                    </Drawer>
                </div>

                {/* Desktop nav links */}
                <div className="hidden md:flex">
                    <ul className="flex items-center gap-4">{links}</ul>
                </div>
            </nav>

            <style>{`
                .tab-item {
                    padding: 0.5rem 1rem;
                    border-radius: 12px;
                    font-weight: 600;
                    color: #ffff; /* light indigo */
                    background: rgba(255 255 255 / 0.1);
                    box-shadow: 0 0 8px rgba(255 255 255 / 0.1);
                    transition:
                        background-color 0.3s ease,
                        color 0.3s ease,
                        box-shadow 0.3s ease,
                        transform 0.2s ease;
                    user-select: none;
                }
                .tab-item:hover {
                    background: rgba(255 255 255 / 0.2);
                    color: #ffff; /* brighter indigo */
                    box-shadow: 0 0 10px rgba(165 180 252 / 0.5);
                    transform: translateY(-2px);
                    cursor: pointer;
                }
                .tab-item:active {
                    transform: translateY(0);
                    box-shadow: 0 0 6px rgba(165 180 252 / 0.3);
                }
            `}</style>
        </header>
    );
};

export default NavBar;
