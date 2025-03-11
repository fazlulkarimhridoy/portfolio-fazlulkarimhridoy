import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Main = () => {
    const location = useLocation();
    const homePath = location.pathname === "/";

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [homePath]);

    return (
        <div className="transition-all duration-300 ease-in-out">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
