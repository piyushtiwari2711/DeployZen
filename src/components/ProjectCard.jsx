import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
export const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800/60 backdrop-blur-lg border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105 w-full max-w-sm mx-auto">
      <div className="w-full h-52 overflow-hidden flex justify-center items-center bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center p-7 w-full">
        <h3 className="text-xl font-bold mb-3 text-cyan-400 text-center">
          {project.title}
        </h3>
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
        <Link
          to={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex items-center space-x-2 text-cyan-400 hover:text-cyan-200 font-semibold transition-colors duration-300 mt-2 text-base"
        >
          <span>View Project</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};
