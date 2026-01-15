import {
    BiLogoHtml5,
    BiLogoTailwindCss,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoMongodb,
} from "react-icons/bi";
import { SiCss3, SiExpress } from "react-icons/si";
import { FaBootstrap, FaJsSquare, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const technicalSkills = [
    { icon: BiLogoHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-600" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
    { icon: BiLogoTailwindCss, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500" },
    { icon: BiLogoNodejs, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-700" },
    { icon: BiLogoReact, name: "React.js", color: "text-sky-500" },
    { icon: BiLogoMongodb, name: "MongoDB", color: "text-green-700" },
    { icon: FaPython, name: "Python", color: "text-blue-500" },
];

const softSkills = [
    "Communication",
    "Problem-Solving",
    "Time Management",
    "Teamwork",
    "Adaptability",
    "Creativity",
    "Quick Learner",
    "Attention to Detail",
];

function Skills() {
    return (
        <section
            id="skills"
            className="py-20 md:py-28 px-5 md:px-12 lg:px-20"
        >
            <h1 className="text-4xl font-bold text-center mb-16">
                Skills
            </h1>

            <div className="max-w-6xl mx-auto space-y-20">

                {/* Technical Skills */}
                <div className=" rounded-2xl 
  outline outline-1 outline-gray-200
  shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9)] p-15 "  >
                    <h2 className="text-center text-3xl font-semibold mb-10">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                        {technicalSkills.map((skill, index) => {
                            const Icon = skill.icon;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-3"
                                >
                                    {/* ICON ONLY ANIMATION */}
                                    <motion.div
                                        whileHover={{ scale: 1.2, y: -8 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="cursor-pointer"
                                    >
                                        <Icon className={`text-5xl ${skill.color}`} />
                                    </motion.div>

                                    {/* TEXT (NO EFFECT) */}
                                    <span className="text-sm font-medium select-none">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Soft Skills */}
                <div className="rounded-2xl 
  outline outline-1 outline-gray-200
  shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9)]  p-15"  >
                    <h2 className="text-center text-3xl font-semibold mb-10">
                        Soft Skills
                    </h2>

                    <div className="flex flex-wrap justify-center gap-5  cursor-pointer">
                        {softSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
