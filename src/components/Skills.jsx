import ReactIcon from "../assets/Icons/react.png"
import JsIcon from "../assets/Icons/JavaScript.png"
import TailwindIcon from "../assets/Icons/tailwind.png"
import CssIcon from "../assets/Icons/css.png"
import HtmlIcon from "../assets/Icons/HTML.png"
import NodeJsIcon from "../assets/Icons/node.png"
import ExpressJsIcon from "../assets/Icons/express.png"
import MongoDBIcon from "../assets/Icons/mongo.png"
import FirebaseIcon from "../assets/Icons/firebase.png"
import GitIcon from "../assets/Icons/Git.svg"
import GithubIcon from "../assets/Icons/Github-Dark.svg"
import VercelIcon from "../assets/Icons/Vercel-Dark.svg"

const Skills = () => {
    return (
        <section>
            <div className="container p-4 mt-10 mx-auto text-center bg-base-100">
                <h4 className="text-base font-medium">All Skills</h4>
                <h2 className="text-4xl font-bold">Both Frontend & Backend Skills.</h2>
            </div>
            <div className="p-6 bg-gray-100 text-gray-800">
                <div className="container max-w-3xl flex flex-wrap justify-center mx-auto text-gray-600">
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={ReactIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={JsIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={TailwindIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={CssIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={HtmlIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={NodeJsIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={ExpressJsIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={MongoDBIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={FirebaseIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={GitIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={GithubIcon} className="fill-current w-20 h-20" />
                    </div>
                    <div className="flex justify-center w-3/4 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={VercelIcon} className="fill-current w-20 h-20" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;