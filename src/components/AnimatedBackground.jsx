import React from 'react';

const codeSnippets = [
  'const deploy = () => {}',
  'npm run build',
  'git push origin main',
  'docker build -t app .',
  'kubectl apply -f',
  'terraform apply',
  'console.log("Hello")',
  'import React from "react"',
  'export default App',
  'async/await',
  'API_KEY=secret',
  'PORT=3000'
];
const techIcons = ['⚛️', '🚀', '⚡', '🔧', '💻', '🌐', '📦', '🔥', '💎', '🎯'];
const AnimatedBackground = () => {


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-black">
      {/* Matrix-like falling code */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-green-400 text-xs font-mono opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              animation: `matrixFall ${8 + Math.random() * 4}s linear infinite`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0">
        {codeSnippets.map((snippet, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-cyan-400 text-sm font-mono bg-gray-900/30 px-3 py-1 rounded border border-cyan-500/20 backdrop-blur-sm opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      {/* Tech icons floating */}
      <div className="absolute inset-0">
        {techIcons.map((icon, i) => (
          <div
            key={`icon-${i}`}
            className="absolute text-2xl opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Terminal windows */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`terminal-${i}`}
            className="absolute bg-gray-900/40 border border-gray-700/50 rounded-lg p-3 backdrop-blur-sm opacity-20"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: '200px',
              height: '120px',
              animationDelay: `${i * 2}s`,
              animation: `terminalGlow 4s ease-in-out infinite alternate`,
            }}
          >
            <div className="flex space-x-1 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-green-400 text-xs font-mono">
              <div>$ npm start</div>
              <div className="text-gray-500">Starting dev server...</div>
              <div className="text-cyan-400">✓ Ready on port 3000</div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated circuit lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#0080ff" />
            </linearGradient>
          </defs>
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={`circuit-${i}`}>
              <path
                d={`M${Math.random() * 100} ${Math.random() * 100} L${Math.random() * 100} ${Math.random() * 100} L${Math.random() * 100} ${Math.random() * 100}`}
                stroke="url(#circuitGradient)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
              <circle
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r="2"
                fill="#00f5ff"
                className="animate-ping"
                style={{
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${1.5 + Math.random()}s`,
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Glowing particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animation: `particleFloat ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Large gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;