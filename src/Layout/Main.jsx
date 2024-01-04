import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;