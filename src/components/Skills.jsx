import ReactIcon from "/assets/Icons/react.png";
import JsIcon from "/assets/Icons/JavaScript.png";
import TailwindIcon from "/assets/Icons/tailwind.png";
import TypeScriptIcon from "/assets/Icons/TypeScript.svg";
import CssIcon from "/assets/Icons/css.png";
import NodeJsIcon from "/assets/Icons/node.png";
import ExpressJsIcon from "/assets/Icons/express.png";
import MongoDBIcon from "/assets/Icons/mongo.png";
import JwtIcon from "/assets/Icons/jwt.svg";
import FirebaseIcon from "/assets/Icons/firebase.png";
import MongooseIcon from "/assets/Icons/mongoose.png";
import GitIcon from "/assets/Icons/Git.svg";
import GithubIcon from "/assets/Icons/Github-Dark.svg";
import VercelIcon from "/assets/Icons/Vercel-Dark.svg";
import NextIcon from "/assets/Icons/NextJS-Dark.svg";
import PrismaIcon from "/assets/Icons/Prisma.svg";
import MysqlIcon from "/assets/Icons/mysql.jpg";
import TrelloIcon from "/assets/Icons/Trello.png";

import "animate.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const skillsData = [
        {
            title: "Frontend Skills",
            skills: [
                { icon: ReactIcon, name: "ReactJs", level: "Comfortable" },
                { icon: NextIcon, name: "NextJs", level: "Comfortable" },
                { icon: JsIcon, name: "Javascript", level: "Comfortable" },
                { icon: TypeScriptIcon, name: "Typescript", level: "Comfortable" },
                { icon: TailwindIcon, name: "TailwindCSS", level: "Expert" },
                { icon: CssIcon, name: "CSS3", level: "Expert" },
            ],
        },
        {
            title: "Backend Skills",
            skills: [
                { icon: NodeJsIcon, name: "NodeJS", level: "Familiar" },
                { icon: ExpressJsIcon, name: "ExpressJS", level: "Familiar" },
                { icon: MongoDBIcon, name: "MongoDB", level: "Familiar" },
                { icon: MongooseIcon, name: "Mongoose", level: "Familiar" },
                { icon: PrismaIcon, name: "Prisma ORM", level: "Comfortable" },
                { icon: MysqlIcon, name: "MySql", level: "Familiar" },
            ],
        },
        {
            title: "Tools",
            skills: [
                { icon: GitIcon, name: "Git", level: "Expert" },
                { icon: GithubIcon, name: "Github", level: "Expert" },
                { icon: TrelloIcon, name: "Trello", level: "Expert" },
                { icon: VercelIcon, name: "Vercel", level: "Expert" },
                { icon: FirebaseIcon, name: "Firebase", level: "Comfortable" },
                { icon: JwtIcon, name: "JWT", level: "Comfortable" },
            ],
        },
    ];

    return (
        <section id="skills" className="overflow-hidden">
            <div className="container p-4 mt-10 mx-auto text-center">
                <h2 className="text-3xl font-bold text-sky-600">Tech Stack</h2>
            </div>
            <div className="flex flex-col lg:flex-row p-2 md:p-6 gap-3">
                {skillsData.map((section, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in-up"
                        className="w-full bg-base-100 p-3 border rounded-md shadow-lg"
                    >
                        <h2 className="text-xl font-medium text-center text-gray-500">{section.title}</h2>
                        <div
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 mt-5 p-2 overflow-y-scroll"
                        >
                            {section.skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-100 hover:bg-sky-50 flex items-center gap-4 border rounded-md p-3 hover:border-sky-300 hover:transition-all hover:duration-100 hover:ease-out hover:scale-105"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.name.toLowerCase()}-icon`}
                                        className="aspect-square w-20 rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-lg/tight font-medium text-gray-900">{skill.name}</h3>
                                        <p className="mt-0.5 text-gray-700">{skill.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
