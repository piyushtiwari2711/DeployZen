
export const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About DeployZen
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                DeployZen empowers startups and enterprises worldwide by
                transforming bold ideas into powerful digital solutions.
              </p>
              <h2 className="text-lg text-white leading-relaxed">
                We connect dreamers, doers, and disruptors with elite
                developers, designers, and strategists — all under one roof.
                Whether it's building dynamic web platforms, scalable apps, or
                automation systems, we deliver end-to-end solutions that help
                your business grow, fast. You dream it, we build it — better,
                faster, and smarter.
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Experts in full-stack web & app development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Powering startups and global businesses alike
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Driven by innovation, built for impact
                  </span>
                </div>
              </div>
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
  )
}
