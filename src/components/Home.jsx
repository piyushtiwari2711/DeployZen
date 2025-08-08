
import AnimatedBackground from "./AnimatedBackground";
import {ContactSection} from "./ContactSection";
import { TeamSection } from "./TeamSection";
import { ProjectSection } from "./ProjectSection";
import { ServiceSection } from "./ServiceSection";
import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";

const Home = () => {

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <HeroSection/>

      {/* About Us Section */}
      <AboutSection/>

      {/* Features Section */}
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

export default Home;
