const projects = [
    {
        id: 1,
        image: "/project1.png",
        name: "Portfolio Website",
        title: "Personal Portfolio",
        skills: ["React", "Tailwind", "Framer Motion"],
        description:
            "A responsive personal portfolio website showcasing my skills and projects.",
    },
    {
        id: 2,
        image: "/project2.png",
        name: "Chat Application",
        title: "Realtime Chat App",
        skills: ["Node.js", "Express", "MongoDB", "Socket.io"],
        description:
            "A real-time chat application with authentication and private rooms.",
    },
    {
        id: 3,
        image: "/project3.png",
        name: "Attendance System",
        title: "College Attendance App",
        skills: ["React", "MongoDB", "Node.js"],
        description:
            "A web-based attendance management system for colleges.",
    },
];

function Project() {
    return (
        <section
            id="project"
            className="py-20 md:py-28 px-5 md:px-12 lg:px-20"
        >
            <h1 className="text-4xl font-bold text-center mb-6">
                Projects
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
                These projects showcase my frontend and backend development skills.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-2xl
 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.85)]
 hover:-translate-y-2 transition"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="h-40 w-full object-cover rounded-t-2xl"
                        />

                        <div className="p-6 space-y-4">
                            <h3 className="text-lg font-semibold">
                                {project.name}
                            </h3>

                            <p className="text-sm text-blue-500 font-medium">
                                {project.title}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-gray-200  text-black"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
