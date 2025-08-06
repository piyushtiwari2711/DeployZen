import React, { useEffect, useState } from 'react';
import { Zap, Shield, Rocket, Globe, Code, Users, ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import FeatureCard from './FeatureCard';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy your applications in seconds with our optimized infrastructure"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: Rocket,
      title: "Auto Scaling",
      description: "Automatically scale your applications based on demand"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Deliver content worldwide with our edge network"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Simple APIs and comprehensive documentation"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for seamless team workflows"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization and business intelligence platform",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React Native", "Node.js", "AWS", "Blockchain"],
      link: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Piyush Tiwari",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Tech innovator with a passion for clean code, scalable products, and empowering digital growth.",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Jai Goyal",
      role: "Full Stack Developer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Passionate about building scalable, user-centric web & mobile applications from scratch to production.",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Swayam Agarwal",
      role: "Frontend Developer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Transforms ideas into elegant web interfaces through thoughtful design and clean code.",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Saurav Nayal",
      role: "Full Stack Developer",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio:   "Experienced in both client-side finesse and server-side strength, turning ideas into full-fledged digital products.",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Mukul Lakhera",
      role: "UI /UX Designer",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Designing seamless user journeys with a perfect blend of creativity and usability",
      social: { github: "#", linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        <div className={`text-center max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            DeployZen
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-light">
            Your one-stop solution for
          </p>
          <p className="text-2xl md:text-3xl mb-12 text-gray-300 font-light">
            <span className="text-cyan-400 font-semibold">seamless deployment</span> and <span className="text-blue-400 font-semibold">development services</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            <button className="group border-2 border-gray-600 hover:border-cyan-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg hover:bg-gray-800/50 backdrop-blur-sm">
              <span className="group-hover:text-cyan-300 transition-colors duration-300">View Our Work</span>
            </button>
          </div>

          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10M+</div>
              <div className="text-gray-400">Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* About Us Section */}
     <section id="about" className="relative z-10 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About DeployZen
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          DeployZen empowers startups and enterprises worldwide by transforming bold ideas into powerful digital solutions.
        </p>
        <h2 className="text-lg text-white leading-relaxed">
          We connect dreamers, doers, and disruptors with elite developers, designers, and strategists — all under one roof. Whether it's building dynamic web platforms, scalable apps, or automation systems, we deliver end-to-end solutions that help your business grow, fast and fearlessly.
          You dream it, we build it — better, faster, and smarter.
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-gray-300">Experts in full-stack web & app development</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300">Powering startups and global businesses alike</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300">Driven by innovation, built for impact</span>
          </div>
        </div>
        <button className="group flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          {/* <span>Learn more about our story</span> */}
          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /> */}
        </button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Team collaboration" 
          className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      {/* Services Section */}
<section id="services" className="relative z-10 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Our Services
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        We offer a range of solutions to help your business grow and succeed online.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Web Development */}
      <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10">
        <div className="bg-green-100 p-6 rounded-full mb-6">
          {/* Computer Icon */}
          <svg width="40" height="40" fill="none" stroke="#22d3ee" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M8 20h8M12 16v4" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">Web Development</h3>
        <p className="text-gray-400 mb-4">Modern & scalable websites built with the latest technologies for optimal performance and user experience.</p>
        <ul className="text-left space-y-2">
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Responsive Design</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Fast Loading</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>SEO Optimized</li>
        </ul>
      </div>
      {/* App Development */}
      <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10">
        <div className="bg-green-100 p-6 rounded-full mb-6">
          {/* Mobile Icon */}
          <svg width="40" height="40" fill="none" stroke="#22d3ee" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">App Development</h3>
        <p className="text-gray-400 mb-4">Native Android & iOS apps with clean UI and seamless user experience across all devices.</p>
        <ul className="text-left space-y-2">
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Cross-Platform</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Native Performance</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>App Store Ready</li>
        </ul>
      </div>
      {/* UI/UX Design */}
      <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10">
        <div className="bg-green-100 p-6 rounded-full mb-6">
          {/* Palette Icon */}
          <svg width="40" height="40" fill="none" stroke="#22d3ee" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <circle cx="8.5" cy="10.5" r="1" />
            <circle cx="15.5" cy="10.5" r="1" />
            <circle cx="12" cy="14.5" r="1" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">UI/UX Design</h3>
        <p className="text-gray-400 mb-4">Beautiful, user-focused designs that convert visitors into customers with intuitive interfaces.</p>
        <ul className="text-left space-y-2">
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>User Research</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Prototyping</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Design Systems</li>
        </ul>
      </div>
      {/* Branding */}
      <div className="bg-white/5 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10">
        <div className="bg-green-100 p-6 rounded-full mb-6">
          {/* Layers Icon */}
          <svg width="40" height="40" fill="none" stroke="#22d3ee" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-white">Branding</h3>
        <p className="text-gray-400 mb-4">Complete brand identity including logos, color systems, and comprehensive design guidelines.</p>
        <ul className="text-left space-y-2">
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Logo Design</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Brand Guidelines</li>
          <li className="flex items-center text-green-400"><span className="mr-2">●</span>Marketing Materials</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing some of the amazing projects we've helped deploy and scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-700/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="group/btn flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
          
          <div className="flex gap-8 overflow-x-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 w-80"
              >
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
                  <a href={member.social.github} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your deployment process? Let's talk about how we can help
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">hello@deployzen.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Address</p>
                      <p className="text-white">123 Tech Street, San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;