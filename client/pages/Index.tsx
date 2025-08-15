import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Index() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Machine Learning Engineer",
    "AI Researcher", 
    "LLM Specialist",
    "Data Science Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic AI-inspired background */}
      <div className="absolute inset-0">
        {/* Neural network nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-pulse delay-2000"></div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
          <line x1="66%" y1="33%" x2="50%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-500" />
          <line x1="16%" y1="50%" x2="25%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-1000" />
          <line x1="50%" y1="66%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-1500" />
        </svg>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="text-white text-xl font-semibold tracking-wide">
          Sneha Mishra
        </div>
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-cyan-400 transition-all duration-300 border-b border-cyan-400">
            Home
          </Link>
          <Link to="/portfolio" className="text-white/80 hover:text-cyan-400 transition-all duration-300">
            Portfolio
          </Link>
          <Link to="/research" className="text-white/80 hover:text-cyan-400 transition-all duration-300">
            Research
          </Link>
          <Link to="/contact" className="text-white/80 hover:text-cyan-400 transition-all duration-300">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Building the Future <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  with AI
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-white/80 font-light h-8">
                <span className="text-cyan-400">{roles[currentRole]}</span>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl text-white/70 max-w-4xl leading-relaxed">
              Machine Learning Engineer at <span className="text-cyan-400 font-semibold">Wizerr AI</span>, specializing in 
              <span className="text-purple-400 font-semibold"> LLMs</span>, 
              <span className="text-emerald-400 font-semibold"> RAG systems</span>, and 
              <span className="text-pink-400 font-semibold"> multimodal AI</span>. 
              5+ years building scalable AI solutions in production.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="https://linkedin.com/in/s-m1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Connect on LinkedIn
              </a>
              <a 
                href="https://github.com/snehamishra4321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-white/70">Components Indexed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">100K+</div>
              <div className="text-white/70">Documents in RAG</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-pink-400 mb-2">Nature</div>
              <div className="text-white/70">Published</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Currently at <span className="text-cyan-400">Wizerr AI</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">LLM Fine-tuning</h3>
                    <p className="text-white/70">Fine-tuning large language models on domain-specific semiconductor datasets using PyTorch and HuggingFace</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">RAG Infrastructure</h3>
                    <p className="text-white/70">Building chat features with LangChain, MCP, and vector databases for contextual document retrieval</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalable Backends</h3>
                    <p className="text-white/70">Developing backend services powering AI features for semiconductor cross-reference tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Production Optimization</h3>
                    <p className="text-white/70">Optimizing end-to-end LLM pipelines for improved latency and quality in real-time queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlight */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">Published Research</h2>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              NPJ Precision Oncology by Nature
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Implemented multi-class classification on Lamin B1 stained imaging for breast cancer tissues, 
              investigating extreme nuclear wrinkling as a cancer biomarker using Vision Transformers, 
              ResNet50, and InceptionV3 models.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
