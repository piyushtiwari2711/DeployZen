import React from "react";
import { ArrowRight } from "lucide-react";

const projects = [
    {
      title: "Creating Dimensions",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js","Firebase","Razorpay"],
      link: "https://creating-dimensions.vercel.app/"
    },
    {
      title: "GhostGram",
      description: "GhostGram – Ask me anything, anonymously.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Next.js", "MongoDB", "Tailwind CSS","NextAuth.js"],
      link: "https://ghostgram.nayalsaurav.tech/"
    },
    {
      title: "CoFlow",
      description: "A collaborative, browser based whiteboard enabling real‑time drawing and idea sharing among multiple users.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Socket.io", "Canvas API", "Node.js", "Express.js"],
      link: "https://coflow-7r11.onrender.com/"
    },
    // {
    //   title: "",
    //   description: "A modern and responsive developer portfolio built with React.js, Tailwind CSS, and Vite.",
    //   image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tech: ["React.js", "Tailwind CSS","Vite"],
    //   link: "https://piyushtiwari2711.vercel.app/"
    // },
    {
      title: "Apna Video Call",
      description: "Apna Video Call – A simple video calling website with chat and screen sharing.",
      image: "/Apnavideocall.png",
      tech: ["React", "WebRtc", "Socket.io", "Node.js","MongoDB","Express.js"],
      link: "https://apna-video-call0.onrender.com"
    },
];

const Projects = () => {
    return(
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center leading-tight pb-2">
        All Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800/60 backdrop-blur-lg border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105 w-full max-w-sm mx-auto"
          >
            <div className="w-full h-52 overflow-hidden flex justify-center items-center bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center p-7 w-full">
              <h3 className="text-xl font-bold mb-3 text-cyan-400 text-center">{project.title}</h3>
              <p className="text-gray-300 mb-5 text-center">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-900/40 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center space-x-2 text-cyan-400 hover:text-cyan-200 font-semibold transition-colors duration-300 mt-2 text-base"
              >
                <span>View Project</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Projects;