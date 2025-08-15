import { Link } from "react-router-dom";

export default function Research() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="text-white text-xl font-semibold tracking-wide">
          Sneha Mishra
        </div>
        <nav className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-white/80 hover:text-cyan-400 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-white/80 hover:text-cyan-400 transition-all duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/research"
            className="text-white hover:text-cyan-400 transition-all duration-300 border-b border-cyan-400"
          >
            Research
          </Link>
          <Link
            to="/contact"
            className="text-white/80 hover:text-cyan-400 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Research &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Publications
            </span>
          </h1>

          <div className="space-y-8">
            {/* Published Research */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-400 font-semibold">PUBLISHED</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Multi-class Classification for Breast Cancer Biomarker Detection
              </h2>
              <p className="text-cyan-400 font-semibold mb-4">
                NPJ Precision Oncology by Nature
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Implemented multi-class classification on Lamin B1 stained
                imaging for breast cancer tissues, augmenting datasets and
                fine-tuning AI models (ViT, ResNet50, InceptionV3) to
                investigate extreme nuclear wrinkling as a cancer biomarker.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Computer Vision
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                  Deep Learning
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">
                  Medical AI
                </span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                  Vision Transformers
                </span>
              </div>
            </div>

            {/* Ongoing Research */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 font-semibold">ONGOING</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                LLM Compression and Optimization
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Developed LLM-Pruner, a task-agnostic compression tool for
                LLaMA-7B, achieving a 30% size reduction while maintaining
                baseline performance. Focus on efficient model deployment for
                resource-constrained environments.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Model Compression
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                  LLMs
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">
                  Optimization
                </span>
              </div>
            </div>

            {/* Research Areas */}
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  Current Focus Areas
                </h3>
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
                      Computer Vision in Healthcare
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  Research Collaborations
                </h3>
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
        </div>
      </section>
    </div>
  );
}
