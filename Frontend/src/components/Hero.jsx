import TypeWriter from "./TypeWriter";
import { motion } from "framer-motion";


function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-5 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-14">

        {/* Image */}
        <figure className="order-1 md:order-2">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-[360px] md:h-[360px] rounded-full overflow-hidden  shadow-[0_18px_40px_-8px_rgba(59,130,246,0.6)]">
            <motion.div
              whileHover={{ scale: 1.1, y: -1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <img
                src="/portfolioImg.png"
                alt="Rahul Singh profile"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        </figure>

        {/* Content */}
        <header className="order-2 md:order-1 text-center md:text-left space-y-6 max-w-xl">

          <h1 className="font-[Poppins] text-4xl sm:text-5xl font-bold">
            Rahul Kumar
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold">
            I am a{" "}
            <span className="text-yellow-500">
              <TypeWriter words={["Full Stack Developer", "Freelancer"]} />
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I am a beginner Full Stack Web Developer learning to build modern web applications. I am passionate about coding and excited to grow as a developer.
          </p>

          <a
            href="/resume/Rahul_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
          >
            Resume
          </a>


        </header>
      </div>
    </section>
  );
}

export default Hero;
