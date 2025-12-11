import { teamMembers } from "../lib/data";
import { TeamMemberCard } from "./TeamMemberCard";

export const TeamSection = () => {
  return (
    <section id="team" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The brilliant minds behind DeployZen's success
          </p>
        </div>

        <div className="flex gap-8 flex-wrap justify-center">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
