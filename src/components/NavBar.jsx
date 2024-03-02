import { Link } from "react-router-dom";
import "../Css/NavBar.css"
import { FaAlignJustify } from "react-icons/fa";
import NameLogo from "../assets/Logos/image.png"
import { Drawer } from "antd";
import { useState } from "react";

const NavBar = () => {
    // scroll to skills
    const scrollToSkills = () => {
        const section = document.getElementById("skills");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    // scroll to projects
    const scrollToProjects = () => {
        const section = document.getElementById("projects");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    // scroll to educations
    const scrollToEducations = () => {
        const section = document.getElementById("educations");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    // scroll to contact
    const scrollToContact = () => {
        const section = document.getElementById("contact");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    // scroll to navbar
    const scrollToBanner = () => {
        const section = document.getElementById("banner");
        section?.scrollIntoView({ behavior: "smooth" });
    };


    // drawer functions
    const [open, setOpen] = useState(false);
    const [placement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // shared links
    const links = <>
        <li onClick={scrollToBanner} className="text-sky-500 font-extrabold"><Link >Home</Link></li>
        <li onClick={scrollToSkills}><Link >Skills</Link></li>
        <li onClick={scrollToProjects}><Link >Projects</Link></li>
        <li onClick={scrollToEducations}><Link >Education</Link></li>
        <li onClick={scrollToContact}><Link >Contact</Link></li>
    </>

    return (
        <header className="fixed z-10 scroll-smooth shadow-2xl bg-gray-800 navbar sm:px-10 sm:py-4 overflow-visible lg:overflow-hidden">
            <div className="navbar-start">
                <Link to="/"><img className="w-32" src={NameLogo} /></Link>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center md:hidden">
                        <button
                            onClick={showDrawer}
                            className="rounded bg-none p-2 text-gray-200 transition hover:text-gray-600/75"
                        >
                            <FaAlignJustify size={25}></FaAlignJustify>
                        </button>
                        <Drawer
                            closeIcon={false}
                            width={200}
                            placement={placement}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            style={{ backgroundColor: "#1F2937" }}
                        >
                            <ul id="link2" className="flex flex-col items-center justify-center gap-4 text-xl">
                                {links}
                            </ul>
                        </Drawer>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <ul id="link2" className="flex flex-row items-center px-2 gap-6 text-white font-semibold">
                        {links}
                    </ul>
                </div>
            </div>

        </header>

    );
};

export default NavBar;