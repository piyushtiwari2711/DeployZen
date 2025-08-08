import React from "react";
import { Link, useLocation } from "react-router";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../lib/data";
import { ArrowRight } from "lucide-react";

export const ProjectSection = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  const displayedProjects = isProjectsPage ? projects : projects.slice(0, 3);
  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing some of the amazing projects we've helped deploy and
            scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Add this button below the cards */}
        {!isProjectsPage && (
          <div className="flex justify-center mt-10">
            <Link
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 flex items-center space-x-2"
              to={"/projects"}
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
