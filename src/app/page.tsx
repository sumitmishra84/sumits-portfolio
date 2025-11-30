import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaRegBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiTailwindcss, SiJavascript, SiReact, SiNodeDotJs, SiMongodb, SiMysql } from "react-icons/si";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white">
      {/* Header Section */}
      <header className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold tracking-wide"
        >
          Sumit Mishra
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="text-lg mt-2"
        >
          Aspiring Full Stack Developer | MERN Stack Enthusiast
        </motion.p>
      </header>

      {/* About Section */}
      <section className="py-16 px-6 bg-black bg-opacity-60">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-semibold mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className="text-lg leading-relaxed"
          >
            I am a passionate Full Stack Developer with a strong foundation in React.js,
            Node.js, and MongoDB. I’ve developed multiple full-stack applications, focusing
            on performance optimization and clean code. I am eager to learn new tools and
            contribute to a collaborative team.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-semibold mb-6"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <SiReact className="mx-auto text-4xl" />
              <p className="mt-2">React.js</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="text-center"
            >
              <SiNodeDotJs className="mx-auto text-4xl" />
              <p className="mt-2">Node.js</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.7 }}
              className="text-center"
            >
              <SiMongodb className="mx-auto text-4xl" />
              <p className="mt-2">MongoDB</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="text-center"
            >
              <SiMysql className="mx-auto text-4xl" />
              <p className="mt-2">MySQL</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-black bg-opacity-60">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-semibold mb-6"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7 }}
            className="space-y-6"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Full-Stack MERN App</h3>
              <p className="mt-2">A dynamic web application with React, Node.js, Express, and MongoDB.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Real-Time Chat App</h3>
              <p className="mt-2">Implemented with WebSockets and Node.js for real-time communication.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-semibold mb-4"
          >
            Contact Me
          </motion.h2>
          <div className="space-y-4">
            <motion.a
              href="mailto:sm0141136@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="flex justify-center items-center space-x-2 text-lg"
            >
              <IoMdMail className="text-2xl" />
              <span>Email</span>
            </motion.a>
            <motion.a
              href="https://github.com/sumitmishra84"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.7 }}
              className="flex justify-center items-center space-x-2 text-lg"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sumit-mishra-918813262/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="flex justify-center items-center space-x-2 text-lg"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-black text-white">
        <p>&copy; 2025 Sumit Mishra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
