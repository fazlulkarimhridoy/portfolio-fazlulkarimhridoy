import NameLogo from "../assets/Logos/image.png"
const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto px- py-2 sm:px-6 lg:px-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <img className="w-32" src={NameLogo}/>
                    </div>

                    <p className="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
                        Copyright &copy; 2023. All rights reserved to Fazlul Karim (Frontend-Developer).
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;