import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiMongodb,
    SiExpress,
    SiTypescript,
    SiJavascript,
    SiFigma,
    SiVisualstudiocode,
    SiPostman,
    SiHtml5,
    SiCss3,
    SiTrello,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { MdDashboardCustomize } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JwtIcon from "/jwt.svg";
import PythonIcon from "/python.svg";
import CIcon from "/C.svg";
import FirebaseIcon from "/Firebase.png";
import PrismaIcon from "/Prisma.svg";
import AntDIcon from "/AntDesign.svg";

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const programmingSkills = [
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: "Comfortable" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "Comfortable" },
        { name: "C", icon: <img src={CIcon} alt="C Icon" className="w-10 h-10" />, level: "Comfortable" },
        { name: "Python", icon: <img src={PythonIcon} alt="Python Icon" className="w-8 h-8" />, level: "Basic" },
    ];

    const frontendSkills = [
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: "Comfortable" },
        { name: "React.js", icon: <FaReact className="text-cyan-300" />, level: "Comfortable" },
        { name: "Ant Design", icon: <img src={AntDIcon} alt="AntD Icon" className="w-8 h-8" />, level: "Comfortable" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "Comfortable" },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" />, level: "Comfortable" },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" />, level: "Comfortable" },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: "Comfortable" },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-white" />, level: "Comfortable" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Comfortable" },
        { name: "MySQL", icon: <GrMysql className="text-blue-700" />, level: "Comfortable" },
        {
            name: "Prisma ORM",
            icon: <img src={PrismaIcon} alt="Prisma Icon" className="w-8 h-8" />,
            level: "Comfortable",
        },
        { name: "Firebase", icon: <img src={FirebaseIcon} alt="Firebase Icon" className="w-8 h-8" />, level: "Basic" },
        {
            name: "JWT",
            icon: <img src={JwtIcon} alt="JWT Icon" className="w-8 h-8" />,
            level: "Basic",
        },
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: "Comfortable" },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" />, level: "Comfortable" },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" />, level: "Comfortable" },
        { name: "Figma", icon: <SiFigma className="text-purple-500" />, level: "Comfortable" },
        { name: "Postman", icon: <SiPostman className="text-orange-400" />, level: "Comfortable" },
        { name: "Dashboard UI", icon: <MdDashboardCustomize className="text-pink-500" />, level: "Comfortable" },
        { name: "Trello", icon: <SiTrello className="text-sky-500" />, level: "Comfortable" },
    ];

    const renderSkills = (skills) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, idx) => (
                <div
                    key={idx}
                    data-aos="fade-up"
                    className="flex items-center gap-4 bg-white dark:bg-[#1e1e1e] shadow-md p-4 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                        <p className="font-semibold">{skill.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div id="skills" className="min-h-screen px-4 py-12 md:px-10 lg:px-20 bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Skills</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
                    Technologies and tools I{"'"}m comfortable with
                </p>

                <section>
                    <h3 className="text-2xl font-semibold mb-2">Programming languages</h3>
                    {renderSkills(programmingSkills)}
                </section>

                <section className="mt-12">
                    <h3 className="text-2xl font-semibold mb-2">Frontend Skills</h3>
                    {renderSkills(frontendSkills)}
                </section>

                <section className="mt-12">
                    <h3 className="text-2xl font-semibold mb-2">Backend & Database Skills</h3>
                    {renderSkills(backendSkills)}
                </section>

                <section className="mt-12">
                    <h3 className="text-2xl font-semibold mb-2">Tools</h3>
                    {renderSkills(tools)}
                </section>
            </div>
        </div>
    );
};

export default Skills;
