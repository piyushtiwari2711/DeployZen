import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
export const TeamMemberCard = ({ member }) => {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 w-80">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
        <img
          src={member.image}
          alt={member.name}
          className="relative w-24 h-24 rounded-full mx-auto object-cover border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
        {member.bio}
      </p>
      <div className="flex justify-center space-x-3">
        <a
          href={member.social.github}
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={member.social.linkedin}
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={member.social.twitter}
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
