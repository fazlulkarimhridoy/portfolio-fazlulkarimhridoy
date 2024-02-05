import { Link } from "react-router-dom";
import "../Css/NavBar.css"
import { FaBars } from "react-icons/fa";
import NameLogo from "../assets/Logos/image.png"
import 'animate.css';


const NavBar = () => {
    const links = <>
        <li className="text-gray-400 text-xl font-extrabold"><Link >Home</Link></li>
        <li><Link >About</Link></li>
        <li><Link >Skills</Link></li>
        <li><Link >Projects</Link></li>
        <li><Link >Education</Link></li>
        <li><Link >Contact</Link></li>
    </>
    return (
        <header className="scroll-smooth shadow-2xl bg-black navbar sm:px-10 overflow-hidden">
            <div className="navbar-start">
                <Link to="/"><img className="animate__animated animate__fadeInTopLeft w-32" src={NameLogo} /></Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="animate__animated animate__fadeInTopRight btn btn-ghost lg:hidden text-white">
                        <FaBars size={30}></FaBars>
                    </div>
                    <ul tabIndex={0} id="link1" className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">
                        {links}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul id="link2" className="animate__animated animate__fadeInTopRight flex flex-row items-center px-2 gap-6 text-white font-semibold">
                        {links}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default NavBar;