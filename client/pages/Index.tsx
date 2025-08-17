import { useState, useEffect, useRef } from 'react';

export default function Index() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic AI-inspired background */}
      <div className="fixed inset-0">
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
        <nav className="flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('research')}
            className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
          >
            Research
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-sm"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16 lg:py-24 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Content - takes 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Sneha</span>
                </h1>
                <div className="text-2xl lg:text-3xl text-white/80 font-light">
                  <span className="text-cyan-400">Machine Learning Engineer</span>
                </div>
              </div>

              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
                Rooted in traditional ML and evolving with modern AI, I build systems that matter — reliable, trustworthy, and built to last. Currently building <span className="text-cyan-400 font-semibold">agentic search platforms</span> at <span className="text-emerald-400 font-semibold">Wizerr AI</span>.
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

            {/* Profile Image - takes 2 columns */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Sneha Mishra" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-white/60 text-lg">Click to upload your photo</p>
                    </div>
                  )}
                  
                  {/* Upload overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer" onClick={triggerImageUpload}>
                    <div className="text-center">
                      <svg className="w-12 h-12 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-white font-semibold">Upload Photo</p>
                    </div>
                  </div>
                </div>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Expertise Highlights - Lightweight Pyramid Layout */}
          <div className="relative pt-6 pb-2 max-w-4xl mx-auto">
            {/* Top Row - Two Items with Wide Spacing */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center items-center mb-4">
              <div className="w-56 group">
                <div className="relative border-l border-cyan-400/40 pl-3 py-2 transform transition-transform duration-500 ease-out hover:translate-x-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="opacity-0 animate-[slideIn_0.6s_ease-out_0.1s_forwards]">
                      <h3 className="text-sm font-semibold text-white">Intelligent Agentic Systems</h3>
                      <p className="text-white/60 text-xs italic">Designing AI that adapts and scales</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-56 group">
                <div className="relative border-l border-purple-400/40 pl-3 py-2 transform transition-transform duration-500 ease-out hover:translate-x-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="opacity-0 animate-[slideIn_0.6s_ease-out_0.2s_forwards]">
                      <h3 className="text-sm font-semibold text-white">Search & Retrieval</h3>
                      <p className="text-white/60 text-xs italic">RAG pipelines for relevance and impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Two Items with Narrow Spacing */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 justify-center items-center">
              <div className="w-56 group">
                <div className="relative border-l border-emerald-400/40 pl-3 py-2 transform transition-transform duration-500 ease-out hover:translate-x-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="opacity-0 animate-[slideIn_0.6s_ease-out_0.3s_forwards]">
                      <h3 className="text-sm font-semibold text-white">Recommendations</h3>
                      <p className="text-white/60 text-xs italic">User-facing intelligence through RecSys</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-56 group">
                <div className="relative border-l border-pink-400/40 pl-3 py-2 transform transition-transform duration-500 ease-out hover:translate-x-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="opacity-0 animate-[slideIn_0.6s_ease-out_0.4s_forwards]">
                      <h3 className="text-sm font-semibold text-white">Context Engineering & Deployment</h3>
                      <p className="text-white/60 text-xs italic">From research to production platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I'm Sneha Mishra, a Machine Learning Engineer with over 5 years of experience who loves building AI systems that aren't just clever, but reliable, scalable, and genuinely useful. At Wizerr AI, I design agentic, chat-based search systems for semiconductor intelligence — architecting ML pipelines, fine-tuning models, and putting guardrails in place so these systems stay robust and adaptable as they grow.
              </p>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Before this, I worked at HCLTech on high-throughput data platforms and ML workflows processing petabytes of data, sharpening my foundation in large-scale pipelines and system architecture. At Ancestry, I experimented with retrieval-augmented generation pipelines and recommendation systems, contributing to an AI-driven historian chatbot project — a true learning ground where I saw how traditional NLP thinking expands into today's LLM-powered world.
              </p>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Earlier, during two years of research at Texas A&M University, I explored everything from cancer imaging to scholar recommendations to healthcare AI. Those years rooted me in classical ML and taught me how to adapt across domains. As the field has evolved, so have I — carrying forward the curiosity and rigor of those foundations while embracing the possibilities of modern, agentic AI.
              </p>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                At the heart of my work is a simple belief: <span className="text-cyan-400 font-semibold">build things that matter, and build them to last</span>.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                Outside of work, I find balance in movement and exploration — whether it's dancing, painting landscapes, hiking mountains, or uncovering hidden places that make you stop and see the world differently. Those small adventures fuel the same spirit I bring to my projects: curious, playful, and creative, yet always grounded in a desire to make something meaningful.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium">🎨 Creative Explorer</span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">🎓 Texas A&M Alum</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">🤖 AI Systems Builder</span>
              <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium">📚 Published Researcher</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section id="work" className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
            Current <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Work</span>
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">
              Machine Learning Engineer at <span className="text-cyan-400">Wizerr AI</span>
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">LLM Fine-tuning</h4>
                    <p className="text-white/70">Fine-tuning large language models on domain-specific semiconductor datasets using PyTorch and HuggingFace</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">RAG Infrastructure</h4>
                    <p className="text-white/70">Building chat features with LangChain, MCP, and vector databases for contextual document retrieval</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Scalable Backends</h4>
                    <p className="text-white/70">Developing backend services powering AI features for semiconductor cross-reference tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Production Optimization</h4>
                    <p className="text-white/70">Optimizing end-to-end LLM pipelines for improved latency and quality in real-time queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Featured Projects</h4>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h5 className="text-lg font-semibold text-white mb-2">AI Virtual Historian Chatbot</h5>
                  <p className="text-cyan-400 text-sm mb-2">Ancestry Inc. | Executive Panel Presentation</p>
                  <p className="text-white/70 text-sm">RAG pipeline for 100K+ family history books with hybrid retrieval, achieving 0.85 MRR and 0.78 ROUGE-1 scores.</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h5 className="text-lg font-semibold text-white mb-2">Scholar Recommendation System</h5>
                  <p className="text-purple-400 text-sm mb-2">Texas A&M University | Production System</p>
                  <p className="text-white/70 text-sm">LLM-powered system using Llama2 with QLoRA and RAG, now used by VP of Research for 2000+ grants annually.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Technical Expertise</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold text-cyan-400 mb-2">AI & Machine Learning</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">PyTorch</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">TensorFlow</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">HuggingFace</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">LangChain</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-purple-400 mb-2">Cloud & Infrastructure</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">AWS</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">Docker</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">Databricks</span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">MLflow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
            Research & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Publications</span>
          </h2>

          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-500/20 mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Published Research</h3>
                <p className="text-purple-400 font-semibold">NPJ Precision Oncology by Nature</p>
              </div>
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Implemented multi-class classification on Lamin B1 stained imaging for breast cancer tissues, 
              investigating extreme nuclear wrinkling as a cancer biomarker using Vision Transformers, 
              ResNet50, and InceptionV3 models.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Research Focus Areas</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-white/80">Large Language Models (LLMs)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/80">Retrieval-Augmented Generation (RAG)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Multimodal Reasoning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-white/80">Computer Vision in Healthcare</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Research Collaborations</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 font-semibold">Texas A&M University</p>
                  <p className="text-white/70 text-sm">Dr. Lele's Mechanobiology Lab</p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold">High-Performance Research Computing</p>
                  <p className="text-white/70 text-sm">LLM Optimization & Benchmarking</p>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold">Statistics & Bioinformatics Lab</p>
                  <p className="text-white/70 text-sm">Healthcare AI Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Always excited to discuss AI research, machine learning projects, or potential collaborations. 
            Or if you just want to chat about the best Austin food spots!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:mishra.sneha.j@gmail.com"
              className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400 text-sm">mishra.sneha.j@gmail.com</p>
            </a>

            <a 
              href="https://linkedin.com/in/s-m1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-blue-400 text-sm">linkedin.com/in/s-m1/</p>
            </a>

            <a 
              href="https://github.com/snehamishra4321"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-purple-400 text-sm">github.com/snehamishra4321</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
            <p className="text-white/70 leading-relaxed">
              I'm particularly interested in projects involving LLMs, RAG systems, computer vision 
              applications in healthcare, and scalable AI infrastructure. Currently available for consulting 
              and open to research collaborations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
