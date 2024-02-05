import ReactIcon from "../assets/Icons/react.png"
import JsIcon from "../assets/Icons/JavaScript.png"
import TailwindIcon from "../assets/Icons/tailwind.png"
import BootstrapIcon from "../assets/Icons/Bootstrap.svg"
import CssIcon from "../assets/Icons/css.png"
import HtmlIcon from "../assets/Icons/HTML.png"
import NodeJsIcon from "../assets/Icons/node.png"
import ExpressJsIcon from "../assets/Icons/express.png"
import MongoDBIcon from "../assets/Icons/mongo.png"
import JwtIcon from "../assets/Icons/jwt.svg"
import FirebaseIcon from "../assets/Icons/firebase.png"
import DjangoIcon from "../assets/Icons/Django.svg"
import GitIcon from "../assets/Icons/Git.svg"
import GithubIcon from "../assets/Icons/Github-Dark.svg"
import VsCodeIcon from "../assets/Icons/vscode.svg"
import NpmIcon from "../assets/Icons/npm.png"
import VercelIcon from "../assets/Icons/Vercel-Dark.svg"
import NetlifyIcon from "../assets/Icons/netlify.svg"
import 'animate.css';


const Skills = () => {
    return (
        <section className="overflow-hidden">
            <div className="container p-4 mt-10 mx-auto text-center">
                <h4 className="text-base font-medium">All Skills</h4>
                <h2 className="text-4xl font-bold">Skill Stacks</h2>
            </div>
            <div className="flex flex-col md:flex-row p-2 md:p-6 gap-3">
                {/* frontend skill section */}
                <div className="animate__animated animate__fadeInUp w-full bg-base-100 p-3 border rounded-md shadow-lg">
                    <div>
                        <h2 className="text-xl font-medium text-center text-gray-500">Frontend Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5">
                        {/* react */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={ReactIcon}
                                alt="react-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">React</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Comfortable
                                </p>
                            </div>
                        </div>
                        {/* javascript */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={JsIcon}
                                alt="js-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Javascript</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Comfortable
                                </p>
                            </div>
                        </div>
                        {/* tailwind */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={TailwindIcon}
                                alt="tailwind-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">TailwindCSS</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Expert
                                </p>
                            </div>
                        </div>
                        {/* bootstrap */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={BootstrapIcon}
                                alt="bootstrap-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Bootstrap</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Comfortable
                                </p>
                            </div>
                        </div>
                        {/* html */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={HtmlIcon}
                                alt="html-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">HTML5</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Expert
                                </p>
                            </div>
                        </div>
                        {/* css */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={CssIcon}
                                alt="css-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">CSS3</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Expert
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* backend skill section */}
                <div className="animate__animated animate__fadeInUp w-full bg-base-100 p-3 border rounded-md shadow-lg">
                    <div>
                        <h2 className="text-xl font-medium text-center text-gray-500">Backend Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5">
                        {/* nodejs */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={NodeJsIcon}
                                alt="nodejs-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">NodeJS</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Familiar
                                </p>
                            </div>
                        </div>
                        {/* expressjs */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={ExpressJsIcon}
                                alt="expressjs-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">ExpressJS</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Familiar
                                </p>
                            </div>
                        </div>
                        {/* mongodb */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={MongoDBIcon}
                                alt="tailwind-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">MongoDB</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Familiar
                                </p>
                            </div>
                        </div>
                        {/* jwt */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={JwtIcon}
                                alt="jwt-icon"
                                className="aspect-square w-20 rounded-lg object-cover bg-gray-900"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">JWT</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Familiar
                                </p>
                            </div>
                        </div>
                        {/* firebase */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={FirebaseIcon}
                                alt="firebase-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Firebase</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Comfortable
                                </p>
                            </div>
                        </div>
                        {/* django */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={DjangoIcon}
                                alt="django-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Django</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Familiar
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* tools section */}
                <div className="animate__animated animate__fadeInUp w-full bg-base-100 p-3 border rounded-md shadow-lg">
                    <div>
                        <h2 className="text-xl font-medium text-center text-gray-500">Tools</h2>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5">
                        {/* git */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={GitIcon}
                                alt="git-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Git</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Comfortable
                                </p>
                            </div>
                        </div>
                        {/* github */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={GithubIcon}
                                alt="github-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Github</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Familiar
                                </p>
                            </div>
                        </div>
                        {/* vscode */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={VsCodeIcon}
                                alt="vscode-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Vs Code</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Expert
                                </p>
                            </div>
                        </div>
                        {/* npm */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={NpmIcon}
                                alt="npm-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">NPM</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Comfortable
                                </p>
                            </div>
                        </div>
                        {/* vercel */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={VercelIcon}
                                alt="html-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Vercel</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Comfortable
                                </p>
                            </div>
                        </div>
                        {/* netlify */}
                        <div className="bg-gray-100 flex items-center gap-4 border rounded-md p-3 hover:border-gray-800 hover:shadow-xl hover:transition-all hover:duration-100 hover:ease-out hover:scale-105">
                            <img
                                src={NetlifyIcon}
                                alt="netlify-icon"
                                className="aspect-square w-20 rounded-lg object-cover"
                            />

                            <div>
                                <h3 className="text-lg/tight font-medium text-gray-900">Netlify</h3>

                                <p className="mt-0.5 text-gray-700">
                                    Familiar
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;