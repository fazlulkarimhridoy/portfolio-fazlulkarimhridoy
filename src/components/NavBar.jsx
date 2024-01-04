import { NavLink } from "react-router-dom";
import "../Css/NavBar.css"
import { FaBars } from "react-icons/fa";
import NameLogo from "../assets/Logos/image.png"

const NavBar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="fixed scroll-smooth shadow-2xl z-20 bg-black navbar container sm:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <FaBars></FaBars>
                    </div>
                    <ul tabIndex={0} id="link1" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className="w-32" src={NameLogo}/>
                {/* <h1 className="text-xl font-bold text-sky-500">Fazlul Karim</h1> */}
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul id="link2" className="flex flex-row items-center px-2 gap-6 text-white font-semibold">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;