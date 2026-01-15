import { useState } from "react";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-100
        md:p-3 
        ">
            {/* Top Row */}
            <div className="flex justify-between  md:justify-around items-center px-6 py-4">
                <div className="text-xl font-bold md:text-3xl">Rahul</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:text-xl gap-10">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
                >
                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300
      ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
                    ></span>

                    <span
                        className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300
      ${isOpen ? "opacity-0" : ""}`}
                    ></span>

                    <span
                        className={`block h-0.5 w-6 bg-white transition-all duration-300
      ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                    ></span>
                </button>

            </div>
            {/* Mobile Menu */}
            <ul
                className={`md:hidden overflow-hidden transition-all duration-600 ease-in-out
    ${isOpen ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
    flex flex-col bg-slate-900 text-center`}
            >
                <li className="py-4 border-t">
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                </li>
                <li className="py-4 border-t">
                    <a href="#project" onClick={() => setIsOpen(false)}>Project</a>
                </li>
                <li className="py-4 border-t">
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                </li>
                <li className="py-4 border-t">
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;
