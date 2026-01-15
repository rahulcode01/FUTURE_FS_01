import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
} from "react-icons/fa";

const socialMedia = [
    { icon: FaGithub, color: "text-orange-500" },
    { icon: FaLinkedin, color: "text-purple-600" },
    { icon: FaTwitter, color: "text-cyan-500" },
    { icon: FaEnvelope, color: "text-yellow-500" },
];
import { motion } from "framer-motion";
function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 px-5 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left */}
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-semibold text-white">
                        Rahul Singh
                    </h2>
                    <p className="text-sm text-gray-400">
                        Full Stack Developer • Freelancer
                    </p>
                </div>
                {/* Center - Social Icons */}
                <div className="flex gap-6 text-xl">
                    {
                        socialMedia.map((app, index) => {
                            const Icon = app.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center gap-3 cursor-pointer "
                                >
                                    <Icon className={`text-3xl ${app.color}`} />
                                </motion.div>
                            );
                        })
                    }
                </div>
                {/* Right */}
                <div className="text-center md:text-right text-sm text-gray-400">
                    © {new Date().getFullYear()} Rahul Singh <br />
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;
