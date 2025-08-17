import { useState, useEffect, useRef } from "react";

export default function Index() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Trigger initial animation after component mounts
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBoxClick = (boxId: string) => {
    const element = document.getElementById(boxId);
    if (element) {
      element.style.animation = "none";
      // Force reflow
      element.offsetHeight;
      element.style.animation = "clickSlide 0.6s ease-out";
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
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
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose-400 rounded-full opacity-80 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-violet-400 rounded-full opacity-60 animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-50 animate-pulse delay-2000"></div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <line
            x1="25%"
            y1="25%"
            x2="66%"
            y2="33%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse"
          />
          <line
            x1="66%"
            y1="33%"
            x2="50%"
            y2="66%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse delay-500"
          />
          <line
            x1="16%"
            y1="50%"
            x2="25%"
            y2="25%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse delay-1000"
          />
          <line
            x1="50%"
            y1="66%"
            x2="75%"
            y2="75%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="animate-pulse delay-1500"
          />
        </svg>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="text-white text-xl font-semibold tracking-wide">
          Sneha Mishra
        </div>
        <nav className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("research")}
            className="text-white/80 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
          >
            Research
          </button>
          <button
            onClick={() => scrollToSection("contact")}
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
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Sneha!
                  </span>
                </h1>
                <div className="text-2xl lg:text-3xl text-white/80 font-light">
                  <span className="text-cyan-400">
                    Machine Learning Engineer
                  </span>
                </div>
              </div>

              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
                Rooted in traditional ML and evolving with modern AI, I build
                systems that matter — reliable, trustworthy, and built to last.
                Currently building{" "}
                <span className="text-cyan-400 font-semibold">
                  agentic search platforms
                </span>{" "}
                at{" "}
                <span className="text-emerald-400 font-semibold">
                  Wizerr AI
                </span>
                .
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
                  className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105"
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
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-white/60 text-lg">
                        Click to upload your photo
                      </p>
                    </div>
                  )}

                  {/* Upload overlay */}
                  <div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    onClick={triggerImageUpload}
                  >
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 text-white mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
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

          {/* Expertise Highlights - Wide Boxes with Click Animation */}
          <div className="relative pt-8 pb-6 w-full px-4">
            {/* Top Row - Almost Full Width (Pyramid Top) */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center mb-8">
              <div
                id="box1"
                className={`w-full lg:w-[45%] cursor-pointer ${hasAnimated ? "opacity-100" : "opacity-0"}`}
                onClick={() => handleBoxClick("box1")}
                style={{
                  transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
                  opacity: hasAnimated ? 1 : 0,
                  transition: hasAnimated ? "all 0.6s ease-out 0.2s" : "none",
                }}
              >
                <div className="relative bg-gradient-to-r from-cyan-500/5 to-cyan-500/10 rounded-xl p-4 border-l-4 border-cyan-400/70 h-20">
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white mb-1">
                        Intelligent Agentic Systems
                      </h3>
                      <p className="text-white/70 text-sm italic">
                        Designing AI that adapts and scales
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="box2"
                className={`w-full lg:w-[45%] cursor-pointer ${hasAnimated ? "opacity-100" : "opacity-0"}`}
                onClick={() => handleBoxClick("box2")}
                style={{
                  transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
                  opacity: hasAnimated ? 1 : 0,
                  transition: hasAnimated ? "all 0.6s ease-out 0.4s" : "none",
                }}
              >
                <div className="relative bg-gradient-to-r from-purple-500/5 to-purple-500/10 rounded-xl p-4 border-l-4 border-purple-400/70 h-20">
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white mb-1">
                        Search & Retrieval
                      </h3>
                      <p className="text-white/70 text-sm italic">
                        RAG pipelines for relevance and impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Slightly Narrower (Pyramid Bottom) */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center">
              <div
                id="box3"
                className={`w-full lg:w-[40%] cursor-pointer ${hasAnimated ? "opacity-100" : "opacity-0"}`}
                onClick={() => handleBoxClick("box3")}
                style={{
                  transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
                  opacity: hasAnimated ? 1 : 0,
                  transition: hasAnimated ? "all 0.6s ease-out 0.6s" : "none",
                }}
              >
                <div className="relative bg-gradient-to-r from-emerald-500/5 to-emerald-500/10 rounded-xl p-4 border-l-4 border-emerald-400/70 h-20">
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white mb-1">
                        Recommendations
                      </h3>
                      <p className="text-white/70 text-sm italic">
                        User-facing intelligence through RecSys
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="box4"
                className={`w-full lg:w-[40%] cursor-pointer ${hasAnimated ? "opacity-100" : "opacity-0"}`}
                onClick={() => handleBoxClick("box4")}
                style={{
                  transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
                  opacity: hasAnimated ? 1 : 0,
                  transition: hasAnimated ? "all 0.6s ease-out 0.8s" : "none",
                }}
              >
                <div className="relative bg-gradient-to-r from-pink-500/5 to-pink-500/10 rounded-xl p-4 border-l-4 border-pink-400/70 h-20">
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white mb-1">
                        Context Engineering & Deployment
                      </h3>
                      <p className="text-white/70 text-sm italic">
                        From research to production platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes clickSlide {
              0% {
                transform: translateX(-10px);
              }
              50% {
                transform: translateX(5px);
              }
              100% {
                transform: translateX(0);
              }
            }
          `}</style>

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Main Story */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  I've always been drawn to{" "}
                  <span className="text-cyan-400 font-medium">puzzles</span>,
                  whether it's untangling a messy dataset, figuring out how
                  systems scale, or navigating the hidden patterns in complex problems.
                </p>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Over the last{" "}
                  <span className="text-purple-400 font-medium">5+ years</span>{" "}
                  of my professional life, that same curiosity has driven me
                  through building large-scale AI systems in enterprises, diving
                  deep into advancing ML research at{" "}
                  <span className="text-emerald-400 font-medium">
                    Texas A&M
                  </span>
                  , and now being part of the founding engineering team shaping
                  agentic search platform at{" "}
                  <span className="text-cyan-400 font-medium">Wizerr AI</span>,
                  in a high growth startup environment.
                </p>

                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border-l-4 border-cyan-400/70 mb-6">
                  <p className="text-white font-medium text-lg italic">
                    "I believe great systems are both thoughtful and enduring —
                    built with precision today, but flexible enough to grow
                    tomorrow, always leaving room for creativity."
                  </p>
                </div>

                <p className="text-white/80 text-lg leading-relaxed">
                  Outside of work, I find balance in{" "}
                  <span className="text-pink-400 font-medium">
                    dancing, painting landscapes
                  </span>
                  , and seeking out hidden places that remind me there is always
                  more to discover!
                </p>
              </div>
            </div>

            {/* Right Column - Key Belief & Values */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-400/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Core Belief
                </h3>
                <p className="text-cyan-400 font-semibold text-lg italic leading-relaxed">
                  "Build things that matter, and build them to last"
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  What Drives Me
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">
                      Untangling complex puzzles
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">
                      Building systems that scale
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">
                      Bridging research and real-world impact
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">
                      Letting curiosity spark discovery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - Personality Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-white/10">
            <span className="bg-cyan-500/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              🎨 Design Thinker
            </span>
            <span className="bg-purple-500/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              🎓 Texas A&M Alum
            </span>
            <span className="bg-emerald-500/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              🤖 AI Systems Builder
            </span>
            <span className="bg-pink-500/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              📚 Published Researcher
            </span>
            <span className="bg-indigo-500/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              🏔️ Mountain lover
            </span>
            <span className="bg-yellow-500/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              💃 Artist
            </span>
          </div>
        </div>
      </section>

      {/* Work & Impact Section */}
      <section id="work" className="relative z-10 px-6 lg:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
            Work &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          {/* Wizerr AI - Current Role */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-2">
              Machine Learning Engineer at{" "}
              <span className="text-cyan-400 text-3xl">Wizerr AI</span>
            </h3>
            <p className="text-white/60 text-lg mb-8">2024 – Present</p>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Box - Experience */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  Multiple Hats 🎓
                </h4>
                <div className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    <span className="text-cyan-400 font-semibold">Designed</span> <span className="text-cyan-400 font-semibold">agentic</span> search platforms with multiple tool features that turn millions of semiconductor component complex datasheets into interactive, engineer-grade intelligence.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Built <span className="text-cyan-400 font-semibold">domain-adapted</span> language models with hybrid retrieval systems powering thousands of daily queries with higher contextual accuracy.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Delivered <span className="text-cyan-400 font-semibold">explainable</span> search systems that connect datasheets with sourcing data, enabling faster cross-references across enterprise chat systems.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Drove new <span className="text-cyan-400 font-semibold">product</span> development and built comprehensive <span className="text-cyan-400 font-semibold">evaluation</span> systems for chat across various scenarios with strong guardrails for production use cases.
                  </p>
                  <div className="bg-cyan-500/10 rounded-lg p-4 border-l-4 border-cyan-400">
                    <p className="text-cyan-300 font-medium text-sm">
                      🚀 Scaled real-time AI workloads with low-latency
                      inference and cloud-native deployment for enterprise
                      reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Box - Skills */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  Key Skills
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-cyan-400 font-semibold mb-2">
                      🧠 Foundation Models (LLMs, Multimodal)
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        LLM Fine-tuning
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Foundation Models
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        State-of-the-Art Models
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Context Engineering
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Prompt Engineering
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        LLM Systems Optimization
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-purple-400 font-semibold mb-2">
                      🤖 Agentic & Search Systems
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Agentic Systems
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        MCP Servers
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Hybrid Retrieval
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Long Context Search
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        State & Memory Mgmt
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-semibold mb-2">
                      💻 Programming & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Python
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        PyTorch
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        TensorFlow
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Docker
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        MLflow
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        LangChain
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-pink-400 font-semibold mb-2">
                      ☁️ Cloud & Infrastructure
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">
                        AWS
                      </span>
                      <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Azure
                      </span>
                      <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">
                        FAISS
                      </span>
                      <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Pinecone
                      </span>
                      <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Vector Databases
                      </span>
                      <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Databricks
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ancestry - Intern Role */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-2">
              AI-NLP-CV Intern at{" "}
              <span className="text-purple-400 text-3xl">Ancestry</span>
            </h3>
            <p className="text-white/60 text-lg mb-8">Summer 2023</p>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Box - Experience */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
                <div className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    <span className="text-purple-400 font-semibold">Developed</span> Virtual <span className="text-purple-400 font-semibold">Historian</span> Chatbot enabling contextual search across 100K+ digitized family history books.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Engineered a <span className="text-purple-400 font-semibold">hybrid</span> RAG system that blended structured metadata with semantic search for rich historical queries.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Explored graph vs. vector databases, balancing relational structure with scalable neural retrieval to improve <span className="text-purple-400 font-semibold">contextual</span> awareness.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Implemented <span className="text-purple-400 font-semibold">multimodal</span> document understanding, connecting text and images for genealogy artifacts.
                  </p>
                  <div className="bg-purple-500/10 rounded-lg p-4 border-l-4 border-purple-400">
                    <p className="text-purple-300 font-medium text-sm">
                      🎯 Presented research outcomes to senior leadership,
                      influencing future product directions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Box - Skills */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  Key Skills
                </h4>
                <div className="space-y-5">
                  <div>
                    <h5 className="text-purple-400 font-semibold mb-2">
                      🔬 NLP & Research
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        BERT
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        GPT-4
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        LLaMA
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Claude
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        RoBERTa
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-cyan-400 font-semibold mb-2">
                      🔄 Hybrid RAG & Retrieval
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        LangChain
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Pinecone
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        ElasticSearch
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Context Engineering
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Cross-encoder
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-emerald-400 font-semibold mb-2">
                      ☁️ Computer Vision & AWS
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        OCR
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        AWS S3
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        SageMaker
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Lambda
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HCLTech - Previous Role */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-2">
              Data & Analytics Engineer / Product Owner at{" "}
              <span className="text-emerald-400 text-3xl">HCLTech</span>
            </h3>
            <p className="text-white/60 text-lg mb-8">2021 – 2022</p>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Box - Experience */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20">
                <div className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    Led development of <span className="text-emerald-400 font-semibold">enterprise-scale</span> analytics platforms, powering insights for 2M+ global users across tools.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Built <span className="text-emerald-400 font-semibold">end-to-end</span> data pipelines to process and serve large-scale client datasets reliably and securely.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Owned <span className="text-emerald-400 font-semibold">product</span> strategy and delivery, bridging technical teams with business stakeholders.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Drove <span className="text-emerald-400 font-semibold">enterprise</span> application rollouts, ensuring performance, scalability, and maintainability.
                  </p>
                  <div className="bg-emerald-500/10 rounded-lg p-4 border-l-4 border-emerald-400">
                    <p className="text-emerald-300 font-medium text-sm">
                      👥 Mentored junior engineers, fostering collaboration and
                      technical growth within the team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Box - Skills */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  Key Skills
                </h4>
                <div className="space-y-5">
                  <div>
                    <h5 className="text-emerald-400 font-semibold mb-2">
                      🔧 Data Engineering
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Python
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Databricks
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Redshift
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Airflow
                      </span>
                      <span className="bg-emerald-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Kafka
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-cyan-400 font-semibold mb-2">
                      📊 Data Science & Analytics
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Spark
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        SQL
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        PowerBI
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Tableau
                      </span>
                      <span className="bg-cyan-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Pandas
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-purple-400 font-semibold mb-2">
                      👔 Product & Leadership
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Agile
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Stakeholder Mgmt
                      </span>
                      <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">
                        Roadmapping
                      </span>
                    </div>
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
            Research &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>

          {/* Research Experience */}
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-400/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              Research Experience at{" "}
              <span className="text-purple-400 text-3xl">
                Texas A&M University
              </span>
            </h3>
            <p className="text-white/60 text-lg mb-6">2022 – 2024</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">
                  Dr. Lele's Mechanobiology Lab
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Developed multi-class classification models for Lamin B1
                  stained breast cancer tissue imaging to investigate nuclear
                  wrinkling as a cancer biomarker.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                  High-Performance Research Computing Lab
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Built scholar recommendation system using LLMs, now utilized
                  by TAMU's VP of Research for 2000+ grants annually. Fine-tuned
                  Llama2 with QLoRA and RAG techniques. Performed{" "}
                  <span className="text-cyan-400 font-semibold">
                    performance benchmarking
                  </span>{" "}
                  of LLMs and vision models for HPC clusters. Developed
                  LLM-Pruner, achieving 30% size reduction with baseline
                  performance.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-300 mb-2">
                  Statistics & Bioinformatics Lab
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Architected custom deep learning models for diabetes treatment
                  regimens using EHRs for 20k+ patients with novel surrogate
                  loss functions.
                </p>
              </div>
            </div>
          </div>

          {/* Published Research */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-500/20 mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Published Research
                </h3>
                <p className="text-purple-400 font-semibold">
                  NPJ Precision Oncology by Nature
                </p>
                <a
                  href="https://www.nature.com/articles/s41698-024-00775-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                >
                  View Publication →
                </a>
              </div>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Applied{" "}
              <span className="text-purple-400 font-semibold">
                fine-tuning and experimentation
              </span>{" "}
              methods for domain adaptation on Lamin B1 stained breast cancer
              tissue images investigating extreme nuclear wrinkling as a cancer
              biomarker.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Implemented multi-class classification through{" "}
              <span className="text-cyan-400 font-medium">
                dataset augmentation
              </span>{" "}
              and
              <span className="text-cyan-400 font-medium"> fine-tuning</span> of
              Vision Transformers, ResNet50, and InceptionV3 for medical imaging
              applications.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Additional work included{" "}
              <span className="text-purple-400 font-semibold">
                fine-tuning conditional-GAN
              </span>{" "}
              (StyleGAN2) architecture for domain-adapted synthetic breast
              cancer imagery and customizing V-Net model for brain CT/MRI
              segmentation achieving 0.87 Dice coefficient.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">
                Research Focus Areas
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-white/80">
                    Large Language Models (LLMs)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white/80">
                    Retrieval-Augmented Generation (RAG)
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">Multimodal Reasoning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-white/80">
                    Deep Learning Applications in Healthcare
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">
                Research Collaborations
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 font-semibold">
                    Texas A&M University
                  </p>
                  <p className="text-white/70 text-sm">
                    Dr. Lele's Mechanobiology Lab
                  </p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold">
                    High-Performance Research Computing
                  </p>
                  <p className="text-white/70 text-sm">
                    LLM Optimization & Benchmarking
                  </p>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold">
                    Statistics & Bioinformatics Lab
                  </p>
                  <p className="text-white/70 text-sm">
                    Healthcare AI Applications
                  </p>
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
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Always excited to discuss AI research, machine learning projects,
            exciting roles, or potential collaborations. Or if you just want to
            chat about the best Austin food spots!
          </p>

          <div className="flex justify-center items-center space-x-12 mb-12">
            <a
              href="mailto:mishra.sneha.j@gmail.com"
              className="group transition-transform duration-300 hover:scale-110"
              title="Email me"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/25">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.818l8.545 6.409 8.545-6.409h1.82c.904 0 1.636.732 1.636 1.636z" />
                </svg>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/s-m1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
              title="Connect on LinkedIn"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/25">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>

            <a
              href="https://github.com/snehamishra4321"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
              title="View GitHub"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-gray-500/25">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
