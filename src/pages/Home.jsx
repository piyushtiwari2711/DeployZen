import { AboutSection } from "../components/AboutSection";
import AnimatedBackground from "../components/AnimatedBackground";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { ServiceSection } from "../components/ServiceSection";
import { TeamSection } from "../components/TeamSection";

export const Home = () => {

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      {/* Hero Section */}
      <HeroSection/>
      {/* About Us Section */}
      <AboutSection/>
      {/* Services Section */}
      <ServiceSection/>
      {/* Project Section */}
      <ProjectSection />
      {/* Team Section */}
      <TeamSection />
      {/* Contact Us Section */}
      <ContactSection/>
    </main>
  );
};

