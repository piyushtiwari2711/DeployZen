import { useEffect, useState } from "react";


export const HeroSection = () => {
      const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section
        id="home"
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6"
      >
        <div
          className={`text-center max-w-5xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            DeployZen
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-light">
            Your one-stop solution for
          </p>
          <p className="text-2xl md:text-3xl mb-12 text-gray-300 font-light">
            <span className="text-cyan-400 font-semibold">
              seamless development
            </span>{" "}
            and{" "}
            <span className="text-blue-400 font-semibold">
              deployment services
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            <button
              className="group border-2 border-gray-600 hover:border-cyan-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg hover:bg-gray-800/50 backdrop-blur-sm"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="group-hover:text-cyan-300 transition-colors duration-300">
                Contact Us
              </span>
            </button>
          </div>

        </div>
      </section>
  )
}
