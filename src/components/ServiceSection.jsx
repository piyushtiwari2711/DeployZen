import React from 'react'

export const ServiceSection = () => {
  return (
    <section id="services" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer a range of solutions to help your business grow and
              succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="bg-green-100 p-6 rounded-full mb-6">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <path d="M8 20h8M12 16v4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">
                Web Development
              </h3>
              <p className="text-gray-400 mb-4">
                Modern & scalable websites built with the latest technologies
                for optimal performance and user experience.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Responsive Design
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Fast Loading
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>SEO Optimized
                </li>
              </ul>
            </div>
            {/* App Development */}
            <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="bg-green-100 p-6 rounded-full mb-6">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <circle cx="12" cy="18" r="1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">
                App Development
              </h3>
              <p className="text-gray-400 mb-4">
                Native Android & iOS apps with clean UI and seamless user
                experience across all devices.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Cross-Platform
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Native Performance
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>App Store Ready
                </li>
              </ul>
            </div>
            {/* UI/UX Design */}
            <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="bg-green-100 p-6 rounded-full mb-6">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="8.5" cy="10.5" r="1" />
                  <circle cx="15.5" cy="10.5" r="1" />
                  <circle cx="12" cy="14.5" r="1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">
                UI/UX Design
              </h3>
              <p className="text-gray-400 mb-4">
                Beautiful, user-focused designs that convert visitors into
                customers with intuitive interfaces.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>User Research
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Prototyping
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Design Systems
                </li>
              </ul>
            </div>
            {/* Branding */}
            <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="bg-green-100 p-6 rounded-full mb-6">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">
                Branding
              </h3>
              <p className="text-gray-400 mb-4">
                Complete brand identity including logos, color systems, and
                comprehensive design guidelines.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Logo Design
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Brand Guidelines
                </li>
                <li className="flex items-center text-green-400">
                  <span className="mr-2">●</span>Marketing Materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}
